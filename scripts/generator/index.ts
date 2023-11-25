import * as path from 'path';
import theme from './settings/orion'

import {generateTheme} from '@moxer/vscode-theme-generator';
import { getColorSet } from './color-set';
import { BUILD_FOLDER_PATH } from '../../src/env';


const THEME_BUILD_PATH = path.join(BUILD_FOLDER_PATH, 'themes')


const colorSet = getColorSet(theme);

generateTheme(theme.name, colorSet, path.join(THEME_BUILD_PATH, `${theme.name}.json`))