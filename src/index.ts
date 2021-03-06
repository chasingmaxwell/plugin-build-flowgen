import { BuilderOptions } from '@pika/types';
import * as fs from 'fs';
import fastGlob from 'fast-glob';
import { promisify } from 'util';
import { join } from 'path';
import { compiler } from 'flowgen';

const writeFile = promisify(fs.writeFile);

export async function build({ out, reporter }: BuilderOptions): Promise<void> {
  await Promise.all((await fastGlob([`${join(out, 'dist-types')}/**/*.d.ts`])).map(async (file: string): Promise<void> => writeFile(
    join(file.replace(/.d.ts$/, '.js.flow')),
    compiler.compileDefinitionFile(file)
  )));
  reporter.created(join(out, 'dist-types', 'index.js.flow'), 'types');
}
