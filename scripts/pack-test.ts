import { execa } from 'execa';
import signale from 'signale';

const ALLOWED_FILES = ['LICENSE', 'README.md', 'package.json'];

async function packCheck() {
  let stdout: string;

  try {
    ({ stdout } = await execa('npm', ['pack', '--dry-run', '--json']));
  } catch (error) {
    signale.error('Failed to run npm pack --dry-run');
    signale.error(error);
    process.exit(1);
  }

  let files: { path: string }[];

  try {
    files = JSON.parse(stdout)[0].files;
  } catch (error) {
    signale.error('Failed to parse npm pack output');
    signale.error(error);
    process.exit(1);
  }

  const extraFiles = files
    .filter((file) => !file.path.startsWith('dist/') && !ALLOWED_FILES.includes(file.path))
    .map((file) => file.path);

  if (extraFiles.length > 0) {
    signale.error(
      'The packed package contains unexpected extra files. Add these files to the .npmignore file to exclude them from the published package.'
    );
    extraFiles.forEach((file) => signale.log(file));
    process.exit(1);
  }

  signale.success('Package validation passed - no unexpected files found');
}

packCheck();
