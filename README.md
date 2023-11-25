<h1 align="center">
Orion Theme for VS Code
</h1>

The theme is designed to be _soothing_ and _easy on the eyes_

## Installation via VS Code
1. `npm install`
1. `npm run build`
2. `vsce package`
3. Right click on generated `.vsix` and select `Install Extensions VSIX`
4. Reload VS Code

## Color Reference
---
### Syntax
| Hex Code                                                                                      | Usage                                                     |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------- |
| ![Strings](https://www.colorbook.io/imagecreator.php?hex=72c09f&width=15&height=15) `#72c09f` | Strings                                                   |
| ![Interpolated Strings](https://www.colorbook.io/imagecreator.php?hex=3f8d6c&width=15&height=15) `#3f8d6c` | Interpolated Strings                                      |
| ![Comments](https://www.colorbook.io/imagecreator.php?hex=464b5d&width=15&height=15) `#464b5d` | Comments                                                  |
| ![Function](https://www.colorbook.io/imagecreator.php?hex=3f848d&width=15&height=15) `#3f848d` | Function Calls                                            |
| ![Numbers](https://www.colorbook.io/imagecreator.php?hex=7068b1&width=15&height=15) `#7068b1` | Numbers & Booleans                                        |
| ![Keywords](https://www.colorbook.io/imagecreator.php?hex=b7410e&width=15&height=15) `#b7410e` | Keywords & Operators                                      |
| ![Function](https://www.colorbook.io/imagecreator.php?hex=c37455&width=15&height=15) `#c37455` | Function & Variable Declaration, Tags & `this`            |
| ![#be856f](https://www.colorbook.io/imagecreator.php?hex=be856f&width=15&height=15) `#be856f` | Object properties, ID selectors in CSS & Type annotations |
| ![Attributes](https://www.colorbook.io/imagecreator.php?hex=a88c00&width=15&height=15) `#a88c00` | Attributes, Constants                                     |
| ![Variables](https://www.colorbook.io/imagecreator.php?hex=5998c0&width=15&height=15) `#5998c0` | Variables, Parameters & Misc                              |
| ![Invalid](https://www.colorbook.io/imagecreator.php?hex=b16a4e&width=15&height=15) `#b16a4e` | Invalid                                                   |

### UI Colors

| Hex Code | Usage |
| -------- | --- |
| ![Default Accent](https://www.colorbook.io/imagecreator.php?hex=3f848d&width=15&height=15) `#3f848d` | Default accent, List hover foreground |
| ![Background](https://www.colorbook.io/imagecreator.php?hex=0F111A&width=15&height=15) `#0F111A` | Background, Background Alt, Contrast Border, Panel background, Quick input background, Editor background, Peek view result background, Diff editor inserted text background, Notifications background |
| ![Caret](https://www.colorbook.io/imagecreator.php?hex=B7410EB6&width=15&height=15) `#B7410EB6` | Caret, Editor cursor foreground, Editor bracket match border |
| ![Find Highlight](https://www.colorbook.io/imagecreator.php?hex=FFCC00&width=15&height=15) `#FFCC00` | Find Highlight |
| ![Foreground](https://www.colorbook.io/imagecreator.php?hex=babed8&width=15&height=15) `#babed8` | Foreground, Editor foreground, Title bar active foreground, Badge foreground, Title bar inactive foreground, Menu foreground, Input placeholder foreground, Peek view title description foreground |
| ![Focus Border](https://www.colorbook.io/imagecreator.php?hex=FFFFFF&width=15&height=15) `#FFFFFF` | Focus Border |
| ![Guides](https://www.colorbook.io/imagecreator.php?hex=3B3F51&width=15&height=15) `#3B3F51` | Guides, Editor line number foreground, Editor indent guide background, Editor indent guide active background, Editor ruler foreground, Tree indent guides stroke |
| ![Line Numbers](https://www.colorbook.io/imagecreator.php?hex=3B3F5180&width=15&height=15) `#3B3F5180` | Line Numbers |
| ![Invisibles](https://www.colorbook.io/imagecreator.php?hex=80869E50&width=15&height=15) `#80869E50` | Invisibles |
| ![Line Highlight](https://www.colorbook.io/imagecreator.php?hex=000000&width=15&height=15) `#000000` | Line Highlight, Editor line highlight background |
| ![Selection](https://www.colorbook.io/imagecreator.php?hex=717CB450&width=15&height=15) `#717CB450` | Selection |
| ![Shadow](https://www.colorbook.io/imagecreator.php?hex=00000030&width=15&height=15) `#00000030` | Shadow |
| ![Input Background](https://www.colorbook.io/imagecreator.php?hex=1A1C25&width=15&height=15) `#1A1C25` | Input Background |
| ![Input Foreground](https://www.colorbook.io/imagecreator.php?hex=EEFFFF&width=15&height=15) `#EEFFFF` | Input Foreground |
| ![Input Border](https://www.colorbook.io/imagecreator.php?hex=FFFFFF10&width=15&height=15) `#FFFFFF10` | Input Border |
| ![Scrollbars](https://www.colorbook.io/imagecreator.php?hex=8F93A220&width=15&height=15) `#8F93A220` | Scrollbars |
| ![Scrollbars Hover](https://www.colorbook.io/imagecreator.php?hex=8F93A210&width=15&height=15) `#8F93A210` | Scrollbars Hover |
| ![Statusbar Foreground](https://www.colorbook.io/imagecreator.php?hex=4B526D&width=15&height=15) `#4B526D` | Statusbar Foreground |
| ![Sidebar Background](https://www.colorbook.io/imagecreator.php?hex=292D3E&width=15&height=15) `#292D3E` | Sidebar Background |
| ![Sidebar Foreground](https://www.colorbook.io/imagecreator.php?hex=525975&width=15&height=15) `#525975` | Sidebar Foreground |
| ![List Hover Background](https://www.colorbook.io/imagecreator.php?hex=292D3E&width=15&height=15) `#292D3E` | List Hover Background |
| ![Tab Active Foreground](https://www.colorbook.io/imagecreator.php?hex=FFFFFF&width=15&height=15) `#FFFFFF` | Tab Active Foreground |
| ![Inactive Selection Background](https://www.colorbook.io/imagecreator.php?hex=00000030&width=15&height=15) `#00000030` | Inactive Selection Background |
| ![Find Match Background](https://www.colorbook.io/imagecreator.php?hex=000000&width=15&height=15) `#000000` | Find Match Background |
| ![Find Match Highlight Background](https://www.colorbook.io/imagecreator.php?hex=00000050&width=15&height=15) `#00000050` | Find Match Highlight Background |
| ![Find Match Highlight Border](https://www.colorbook.io/imagecreator.php?hex=ffffff30&width=15&height=15) `#ffffff30` | Find Match Highlight Border |

Let me know if there's anything else you'd like!
## Credits
This theme was inspired by [Material Theme Ocean](https://github.com/material-theme/vsc-material-theme)