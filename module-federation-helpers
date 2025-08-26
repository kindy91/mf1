const fs = require('fs');
const path = require('path');

function getSharedDependency(dependencyName, config) {
  if (config.requiredVersion === '^auto') {
    const packageJsonPath = getPackageJson();
    const versions = getAllVersions(packageJsonPath);
    config.requiredVersion = getVersion(dependencyName, versions);
  }

  return {
    [dependencyName]: config,
  };
}

function getPackageJson() {
  let folder = process.cwd();

  while (!fs.existsSync(path.join(folder, 'package.json')) && path.dirname(folder) !== folder) {
    folder = path.dirname(folder);
  }

  const filePath = path.join(folder, 'package.json');
  if (fs.existsSync(filePath)) {
    return filePath;
  }

  throw new Error('package.json could not be found');
}

function getVersion(dependencyName, versions) {
  const parts = dependencyName.split('/');
  if (parts.length >= 2 && parts[0].startsWith('@')) {
    dependencyName = parts[0] + '/' + parts[1];
  } else {
    dependencyName = parts[0];
  }

  let version = versions[dependencyName];
  if (!version) {
    throw new Error(`Dependency ${dependencyName} could not be found in package.json`);
  }

  if (!version.startsWith('^')) {
    version = '^' + version;
  }

  const hasPrereleaseTag = version.includes('-');
  if (hasPrereleaseTag) {
    const [majorMinorPatch, prereleaseTag] = version.split('-');
    const [major, minor, patch] = majorMinorPatch.split('.');
    const [prereleaseTagWithoutIncrement] = prereleaseTag.split('.');
    version = `${major}.0.0 || ${major}.${minor}.${patch}-${prereleaseTagWithoutIncrement}`;
  } else {
    const major = version.split('.')[0];
    version = major + '.0.0';
  }

  return version;
}

function getAllVersions(packagePath) {
  return {
    ...require(packagePath).dependencies,
  };
}

module.exports = {
  getSharedDependency,
};