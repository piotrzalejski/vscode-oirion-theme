import { IColorSet } from "@moxer/vscode-theme-generator";
import { ColorSetting } from "./types";

export const getColorSet = (colors: ColorSetting): IColorSet => {
    return {

        semanticHighlighting: true,
        base: {
            // Determines the overall background color
            background: colors.scheme.background ,
            // Determines boolean, identifier, keyword, storage, and cssClass
            color1: colors.scheme.base.red,
            // Determines string, stringEscape, and cssId
            color2: colors.scheme.base.green,
            // Determines function, class, classMember, type, and cssTag
            color3: colors.scheme.base.yellow,
            // Determines functionCall and number
            color4: colors.scheme.base.blue,
            // Determines the overall text foreground color
            foreground: colors.scheme.foreground
        },
        customTokens: [
            {
                "name": "COMMENT",
                "scope": [
                    "comment",
                    "punctuation.definition.comment",
                    "punctuation.definition.tag",
                    "comment.block.documentation punctuation.definition.bracket",
                    "source.ocaml comment constant.regexp meta.separator",
                    "markup.other.anchor support.constant",
                    "markup.fenced_code",
                    "markup.fenced_code punctuation.definition",
                    "punctuation.definition.heading",
                    "punctuation.definition.bold.markdown",
                    "punctuation.definition.italic.markdown",
                    "punctuation.definition.strikethrough.markdown"
                ],
                "settings": {
                    "foreground": colors.scheme.comment
                }
            },
            {
                "name": "TEXT",
                "scope": [
                    "constant.character",
                    "constant.escape",
                    "text.html.markdown",
                    "punctuation.definition.list_item",
                    "keyword.begin.tag.ejs",
                    "constant.name.attribute.tag.pug",
                    "source.clojure meta.symbol",
                    "constant.other.description.jsdoc",
                    "keyword.other.array.phpdoc.php",
                    "keyword.operator.other.powershell",
                    "meta.link.inline punctuation.definition.string",
                    "source.sql",
                    "source meta.brace",
                    "source punctuation",
                    "text.html punctuation",
                    "markup meta punctuation.definition",
                    "meta.bracket.julia",
                    "meta.array.julia",
                    "entity.name.footnote",
                    "source.ocaml punctuation.definition.tag",
                    "source.ocaml entity.name.filename",
                    "source.reason entity.name.filename",
                    "entity.other.attribute-name strong",
                    "binding.fsharp keyword.symbol.fsharp",
                    "entity.name.record.field.elm",
                    "entity.name.record.field.accessor.elm",
                    "storage.modifier.array.bracket",
                    "source.css entity.other",
                    "meta.attribute-selector punctuation.definition.entity",
                    "markup.other.anchor string",
                    "punctuation.separator",
                    "punctuation.section",
                    "punctuation.terminator"
                ],
                "settings": {
                    "foreground": colors.scheme.text
                }
            },
            {
                "name": "KEYWORD",
                "scope": [
                    "keyword",
                    "keyword.control",
                    "keyword.other.template",
                    "keyword.other.substitution",
                    "storage.modifier",
                    "meta.tag.sgml",
                    "punctuation.accessor",
                    "constant.other.color",
                    "entity.name.section",
                    "markup.heading",
                    "markup.heading punctuation.definition",
                    "entity.other.attribute-name.pseudo-class",
                    "entity.other.attribute-name.pseudo-element",
                    "tag.decorator.js entity.name.tag.js",
                    "tag.decorator.js punctuation.definition.tag.js",
                    "storage.type.function.pug",
                    "text.pug storage.type",
                    "text.pug meta.tag.other",
                    "source.clojure storage.control",
                    "meta.expression.clojure",
                    "punctuation.separator.slice.python",
                    "punctuation.separator.question-mark.cs",
                    "punctuation.definition.parameters.varargs",
                    "source.go keyword.operator",
                    "punctuation.separator.pointer-access",
                    "punctuation.separator.other.ruby",
                    "keyword.package",
                    "keyword.import",
                    "punctuation.definition.keyword",
                    "punctuation.separator.hash.cs",
                    "entity.other.attribute-name.pseudo-class.css punctuation.definition.entity.css",
                    "entity.other.attribute-name.pseudo-element.css punctuation.definition.entity.css",
                    "source.kotlin storage.type.import",
                    "source.kotlin storage.type.package",
                    "constant.string.documentation.powershell",
                    "punctuation.section.directive",
                    "storage.type.rust",
                    "punctuation.definition.attribute",
                    "punctuation.definition.preprocessor",
                    "punctuation.separator.namespace",
                    "punctuation.separator.method",
                    "keyword.control punctuation.definition.function",
                    "source.ocaml variable.interpolation string",
                    "source.reason variable.interpolation",
                    "punctuation.definition.directive",
                    "storage.type.modifier",
                    "keyword.other.class.fileds",
                    "source.toml entity.other.attribute-name",
                    "source.css entity.name.tag.custom",
                    "sharing.modifier",
                    "keyword.control.class.ruby",
                    "keyword.control.def.ruby"
                ],
                "settings": {
                    "foreground": colors.scheme.keyword
                }
            },
            {
                "name": "VARIABLE",
                "scope": [
                    "variable",
                    "variable.object",
                    "variable.other",
                    "variable.parameter",
                    "support",
                    "entity.name.module",
                    "variable.import.parameter",
                    "variable.other.class",
                    "meta.toc-list.id.html",
                    "source.json meta.structure.dictionary.json support.type.property-name.json",
                    "meta.var.clojure",
                    "entity.name.variable",
                    "source.java meta.class.body.java",
                    "entity.name.package.go",
                    "source.c",
                    "source.cpp",
                    "source.go",
                    "source.python",
                    "meta.function-call.arguments.python",
                    "source.ruby",
                    "source.coffee.embedded.source",
                    "source.coffee",
                    "storage.modifier.import",
                    "storage.modifier.package",
                    "storage.type.annotation",
                    "punctuation.definition.annotation",
                    "source.groovy.embedded.source",
                    "punctuation.definition.variable",
                    "source.powershell",
                    "string.quoted.interpolated.vala constant.character.escape.vala",
                    "source.apacheconf",
                    "source.objc",
                    "source.crystal",
                    "string.quoted.double.kotlin entity.string.template.element.kotlin",
                    "entity.name.package.kotlin",
                    "meta.template.expression.kotlin",
                    "parameter.variable.function",
                    "variable.other.constant.elixir",
                    "source.elixir.embedded.source",
                    "source.sql.embedded",
                    "punctuation.definition.placeholder",
                    "source.swift",
                    "source.julia",
                    "source.shell",
                    "variable.other.normal punctuation.definition.variable.shell",
                    "source.reason variable.language",
                    "source.reason variable.language string.other.link",
                    "source.elm meta.value",
                    "source.elm meta.declaration.module",
                    "meta.embedded.block variable punctuation.definition.variable.php",
                    "string.quoted.double.class.other",
                    "source.toml keyword",
                    "support.type.nim",
                    "source.tf meta.template.expression",
                    "source.scala entity.name.import",
                    "markup.code",
                    "markup.fenced_code.block"
                ],
                "settings": {
                    "foreground": colors.scheme.variable
                }
            },
            {
                "name": "ANNOTATION",
                "scope": [
                    "support.variable.property",
                    "constant.other.symbol.hashkey.ruby",
                    "constant.other.symbol.hashkey.ruby punctuation.definition.constant.ruby",
                    "entity.other.attribute-name.id",
                    "entity.other.attribute-name.id punctuation.definition.entity",
                    "entity.name.type.annotation.kotlin",
                    "support.type.primitive",
                    "meta.type.parameters entity.name.type",
                    "meta.type.annotation entity.name.type",
                    "punctuation.definition.typeparameters",
                    "source.python support.type.python",
                    "comment.block.documentation.phpdoc.php keyword.other.type.php",
                    "storage.type.php",
                    "keyword.type",
                    "storage.type.cs",
                    "storage.type.c",
                    "storage.type.objc",
                    "punctuation.definition.storage.type.objc",
                    "markup punctuation.definition",
                    "storage.type.powershell",
                    "comment.block.documentation entity.name.type",
                    "source.java storage.type",
                    "storage.type.primitive",
                    "source.groovy storage.type",
                    "storage.type.r",
                    "source.haskell storage.type",
                    "punctuation.separator.clause-head-body",
                    "source.go storage.type",
                    "storage.type.core.rust",
                    "storage.class.std.rust",
                    "storage.modifier.lifetime.rust",
                    "entity.name.lifetime.rust",
                    "support.type.vb",
                    "support.type.julia",
                    "constant.other.reference",
                    "source.graphql support.type",
                    "source.reason support.type string",
                    "source.elm storage.type",
                    "storage.type.user-defined",
                    "storage.type.built-in",
                    "support.type.builtin",
                    "source.swift support.type",
                    "support.class.crystal",
                    "storage.type.integral",
                    "source.cpp storage.type.cpp",
                    "source.vala storage.type",
                    "source.hlsl storage.type.basic",
                    "source.hlsl support.type.other",
                    "source.apex storage.type",
                    "source.nim storage.type",
                    "support.class.builtin",
                    "source.tf meta.keyword.string",
                    "source.tf meta.keyword.number",
                    "source.scala entity.name.class",
                    "markup.raw.monospace",
                    "markup.mark",
                    "entity.name.type"
                ],
                "settings": {
                    "foreground": colors.scheme.annotation
                }
            },
            {
                "name": "CONSTANT",
                "scope": [
                    "constant",
                    "variable.other.constant",
                    "support.constant",
                    "punctuation.definition.entity",
                    "constant.character.entity",
                    "support.variable.magic",
                    "markup.quote",
                    "entity.name.type.type-parameter.cs",
                    "punctuation.bracket.angle",
                    "entity.name.function.preprocessor.c",
                    "storage.type.scala",
                    "entity.helper.apacheconf",
                    "variable.language.crystal",
                    "punctuation.definition.constant",
                    "support.constant punctuation.definition.variable",
                    "constant.character.math",
                    "support.class.math",
                    "source.graphql constant.character",
                    "source.reason constant.language.list",
                    "source.cpp variable.other.enummember",
                    "support.variable.class.hideshow",
                    "entity.other.attribute-name.class",
                    "meta.attribute.id entity.other.attribute-name",
                    "text.html entity.other.attribute-name",
                    "meta.tag.attributes entity.other.attribute-name",
                    "text.xml entity.other.attribute-name",
                    "source.cs entity.other.attribute-name",
                    "constant.character.format.placeholder",
                    "constant.other.placeholder",
                    "source.vue entity.other.attribute-name",
                    "entity.other.attribute-name.mjml",
                    "source.vue meta.directive punctuation.separator.key-value",
                    "meta.definition.attribute-entry punctuation.separator"
                ],
                "settings": {
                    "foreground": colors.scheme.constant
                }
            },
            {
                "name": "TAG",
                "scope": [
                    "variable.language",
                    "variable.parameter.function.language.special",
                    "punctuation.definition.italic",
                    "punctuation.definition.bold",
                    "entity.name.tag",
                    "variable.language punctuation.definition.variable",
                    "keyword.control.clojure",
                    "support.type.exception.python",
                    "keyword.other.this.cs",
                    "keyword.other.base.cs",
                    "keyword.other.var.cs",
                    "storage.modifier.super",
                    "source.go keyword",
                    "keyword.function.go",
                    "meta.separator",
                    "keyword.other.fn.rust",
                    "storage.modifier.static.rust",
                    "source.r meta.function.r keyword.control.r",
                    "storage.type.def",
                    "meta.class.identifier storage.modifier",
                    "source.scala keyword.declaration",
                    "storage.type",
                    "comment.block.documentation punctuation.definition.block.tag",
                    "comment.block.documentation punctuation.definition.inline.tag",
                    "entity.tag.apacheconf",
                    "keyword.other.julia",
                    "source.julia storage.modifier",
                    "constant.language.empty-list.haskell",
                    "meta.function.powershell storage.type.powershell",
                    "keyword.control.fun",
                    "punctuation.terminator.function",
                    "keyword.other.rust",
                    "keyword.other.declaration-specifier.swift",
                    "keyword.control.class",
                    "keyword.control.def",
                    "source.ocaml keyword markup.underline",
                    "source.ocaml storage.type markup.underline",
                    "binding.fsharp keyword",
                    "function.anonymous keyword",
                    "function.anonymous keyword.symbol.fsharp",
                    "meta.embedded.block variable.language punctuation.definition.variable.php",
                    "keyword.declaration.dart",
                    "source.wsd keyword.other.class",
                    "source.wsd keyword.other.linebegin",
                    "keyword.other.skinparam.keyword",
                    "keyword.other.nim",
                    "markup.deleted.diff",
                    "source.tf support.class.variable",
                    "meta.function.lua keyword.control.lua",
                    "markup.block entity.name.tag",
                    "markup.meta.attribute-list",
                    "source.zig keyword.default",
                    "source.zig keyword.structure"
                ],
                "settings": {
                    "foreground": colors.scheme.tag
                }
            },
            {
                "name": "STRING",
                "scope": [
                    "string",
                    "punctuation.definition.string",
                    "source.css support.constant",
                    "entity.name.import.go",
                    "markup.raw.texttt",
                    "markup.inserted.diff",
                    "source.scala punctuation.definition.character",
                    "constant.character.literal.scala",
                    "source.tf entity.name"
                ],
                "settings": {
                    "foreground": colors.scheme.string
                }
            },
            {
                "name": "STRINGINTERPOLATED",
                "scope": [
                    "string.template",
                    "punctuation.definition.string.template",
                    "string.interpolated.python string.quoted.single.python",
                    "string.quoted.double.heredoc",
                    "string.quoted.interpolated.vala",
                    "string.quoted.interpolated.vala punctuation.definition.string",
                    "string.regexp.apacheconf",
                    "markup.inline.raw.string",
                    "markup.inline.raw punctuation.definition.raw",
                    "string.quoted.double.interpolated.crystal",
                    "string.quoted.double.interpolated.crystal punctuation.definition.string",
                    "text.tex markup.raw"
                ],
                "settings": {
                    "foreground": colors.scheme.stringInterpolated
                }
            },
            {
                "name": "NUMBER",
                "scope": [
                    "constant.numeric",
                    "constant.language",
                    "punctuation.separator.decimal.period.php",
                    "keyword.operator.null-conditional.cs",
                    "punctuation.separator.question-mark.cs",
                    "constant.integer.apacheconf",
                    "keyword.operator.nullable-type",
                    "constant.language punctuation.definition.variable",
                    "constant.others.fsharp",
                    "keyword.other.unit",
                    "string.quoted.double.skinparam.value",
                    "source.toml constant",
                    "source.zig keyword.constant.bool",
                    "source.zig keyword.constant.default"
                ],
                "settings": {
                    "foreground": colors.scheme.number
                }
            },
            {
                "name": "FUNCTION",
                "scope": [
                    "variable.function",
                    "support.type.property-name",
                    "entity.name.function",
                    "string.other.link",
                    "markup.link",
                    "support.type.vendored",
                    "support.other.variable",
                    "meta.function-call.generic.python",
                    "meta.method-call.groovy meta.method.groovy",
                    "meta.class.body.groovy meta.method.body.java storage.type.groovy",
                    "punctuation.definition.decorator",
                    "support.function.any-method",
                    "text.tex support.function",
                    "text.tex punctuation.definition.function",
                    "entity.name.section.fsharp entity.name.section.fsharp",
                    "support.variable.class.function",
                    "keyword.control.cucumber.table",
                    "punctuation.decorator",
                    "source.tf support.class"
                ],
                "settings": {
                    "foreground": colors.scheme.function
                }
            },
            {
                "name": "SUPPORT",
                "scope": [
                    "entity.name",
                    "entity.other",
                    "support.orther.namespace.use.php",
                    "meta.use.php",
                    "support.other.namespace.php",
                    "support.type",
                    "support.class",
                    "punctuation.definition.parameters",
                    "support.function",
                    "support.function.construct",
                    "markup.changed.git_gutter",
                    "markup.underline.link",
                    "markup.underline.link.image",
                    "markup.underline",
                    "meta.symbol.namespace.clojure",
                    "entity.mime-type.apacheconf",
                    "keyword.operator.function.infix",
                    "entity.name.function.infix",
                    "entity.name.function.call.kotlin",
                    "text.tex support.function.verb",
                    "text.tex support.function.texttt",
                    "source.reason constant.language.unit",
                    "source.ocaml constant.language constant.numeric entity.other.attribute-name.id.css",
                    "source.reason entity.other.attribute-name constant.language constant.numeric",
                    "constant.language.unit.fsharp",
                    "source.wsd support.class.preprocessings",
                    "keyword.language.gherkin.feature.scenario",
                    "source.nim keyword.other.common.function",
                    "entity.name.scope-resolution.function.call"
                ],
                "settings": {
                    "foreground": colors.scheme.support
                }
            },
            {
                "name": "MISC",
                "scope": [
                    "source.js constant.other.object.key.js string.unquoted.label.js",
                    "source.js punctuation.section.embedded",
                    "punctuation.definition.template-expression",
                    "support.class",
                    "storage.type.string.python",
                    "string.interpolated.pug",
                    "support.constant.handlebars",
                    "source.clojure punctuation.section.set",
                    "source.clojure punctuation.section.metadata",
                    "entity.global.clojure",
                    "source.python meta.function-call.python support.type.python",
                    "entity.other.inherited-class.python",
                    "punctuation.definition.interpolation",
                    "punctuation.section.embedded.begin.ruby",
                    "punctuation.section.embedded.end.ruby source.ruby",
                    "support.constant.math",
                    "entity.namespace.r",
                    "meta.method-call.groovy storage.type.groovy",
                    "source.scala entity.name.class.declaration",
                    "constant.character.escape",
                    "support.function.macro.julia",
                    "string.replacement.apacheconf",
                    "storage.modifier.using.vala",
                    "constant.other.haskell",
                    "source.objc entity.name.tag",
                    "string.quoted.other.literal.upper.crystal punctuation.definition.string",
                    "meta.embedded.line.crystal punctuation.section.embedded",
                    "meta.embedded.line.crystal punctuation.section.embedded source.crystal",
                    "punctuation.section.embedded",
                    "punctuation.section.tag",
                    "punctuation.section.embedded source.swift",
                    "variable.other.bracket punctuation.definition.variable",
                    "string.interpolated.dollar punctuation.definition.string",
                    "constant.character.escape punctuation.definition.keyword",
                    "source.ocaml entity.name.class constant.numeric",
                    "source.reason entity.name.class",
                    "keyword.format.specifier.fsharp",
                    "support.module.elm",
                    "meta.embedded.block.php punctuation.definition.variable.php",
                    "source.vala storage.type",
                    "support.variable.class.group",
                    "entity.name.type.class",
                    "source.tf meta.keyword.list",
                    "source.tf meta.keyword.map",
                    "entity.name.class.lua",
                    "markup.substitution"
                ],
                "settings": {
                    "foreground": colors.scheme.misc
                }
            },
            {
                "name": "INVALID",
                "scope": [
                    "invalid",
                    "invalid.illegal"
                ],
                "settings": {
                    "foreground": colors.scheme.invalid
                }
            },
            {
                "name": "ITALIC",
                "scope": [
                    "comment",
                    "storage.modifier",
                    "punctuation.definition.comment",
                    "entity.other",
                    "variable.language",
                    "support.type.vendored",
                    "support.constant.vendored",
                    "markup.quote",
                    "markup.italic",
                    "tag.decorator.js entity.name.tag.js",
                    "tag.decorator.js punctuation.definition.tag.js",
                    "keyword.control.clojure",
                    "source.clojure meta.symbol.dynamic",
                    "keyword.other.this.cs",
                    "keyword.other.base.cs",
                    "variable.other.member.c",
                    "support.type.core.rust",
                    "variable.other.object.property",
                    "variable.other.property",
                    "source.r meta.function.r keyword.control.r",
                    "comment.line.roxygen.r keyword",
                    "comment.line.roxygen.r variable.parameter.r",
                    "keyword.control.inheritance.coffee",
                    "comment.block.documentation.phpdoc.php keyword",
                    "keyword.other.array.phpdoc.php",
                    "storage.type.modifier",
                    "comment.block.javadoc.java keyword",
                    "comment.block.javadoc.java variable.parameter.java",
                    "keyword.operator.documentation.powershell",
                    "storage.type.scala",
                    "variable.parameter.function.language.special",
                    "comment.block.documentation.scala keyword",
                    "comment.block.documentation.scala variable.parameter",
                    "support.function.builtin.go",
                    "constant.other.symbol.hashkey.ruby",
                    "constant.other.symbol.hashkey.ruby punctuation.definition.constant.ruby",
                    "constant.other.symbol.ruby",
                    "source.vala storage.type.generic",
                    "constant.other.table-name",
                    "constant.other.placeholder",
                    "variable.other.field",
                    "entity.alias.import.go",
                    "source.swift keyword.other.declaration-specifier",
                    "support.variable.swift",
                    "keyword.other.capture-specifier",
                    "text.tex support.function.emph",
                    "constant.other.math",
                    "support.function.textit",
                    "entity.name.footnote",
                    "entity.name.function.directive.graphql",
                    "source.graphql support.type.enum",
                    "source.ocaml entity.name.filename",
                    "source.reason entity.name.filename",
                    "abstract.definition.fsharp keyword",
                    "abstract.definition.fsharp entity",
                    "function.anonymous keyword",
                    "entity.name.record.field.accessor.elm",
                    "support.type.primitive",
                    "support.type.builtin",
                    "keyword.type.cs",
                    "storage.type.built-in",
                    "storage.type.primitive",
                    "source.python support.type.python",
                    "storage.type.core.rust",
                    "source.swift support.type",
                    "source.go storage.type",
                    "storage.type.php",
                    "storage.type.function.kotlin",
                    "entity.name.type.kotlin",
                    "support.type.julia",
                    "variable.other.member",
                    "keyword.other.import",
                    "keyword.package",
                    "keyword.import",
                    "source.wsd keyword.control.diagram",
                    "keyword.language.gherkin.feature.step",
                    "source.hlsl storage.type.basic",
                    "source.apex keyword.type",
                    "sharing.modifier",
                    "source.nim storage.type.concrete",
                    "meta.preprocessor.pragma.nim",
                    "storage.type.integral",
                    "entity.name.scope-resolution.function.call",
                    "support.class.builtin",
                    "comment.block.documentation storage.type.class",
                    "source.tf meta.keyword.string",
                    "source.tf meta.keyword.number",
                    "source.scala entity.name.class",
                    "meta.import keyword.control",
                    "keyword.control.export",
                    "source.vue meta.directive punctuation.separator.key-value",
                    "keyword.local.lua",
                    "markup.mark.constrained markup.mark",
                    "markup.block.open",
                    "entity.name.type.primitive",
                    "entity.name.type.numeric",
                    "source.zig keyword.type",
                    "source.zig keyword.storage",
                    "source.zig keyword.structure"
                ],
                "settings": {
                    "fontStyle": "italic"
                }
            },
            {
                "name": "BOLD",
                "scope": [
                    "keyword",
                    "keyword.control",
                    "keyword.operator",
                    "keyword.other.template",
                    "keyword.other.substitution",
                    "storage.type.function.arrow",
                    "constant.other.color",
                    "punctuation.accessor",
                    "entity.name.section",
                    "markdown.heading",
                    "markup.inline.raw punctuation.definition.raw",
                    "markup.heading",
                    "storage.type.function.pug",
                    "storage.type.function.python",
                    "storage.type.annotation",
                    "punctuation.bracket.angle",
                    "keyword.other.new",
                    "storage.type.generic.wildcard",
                    "source.go keyword.operator",
                    "constant.other.symbol.ruby punctuation.definition.constant.ruby",
                    "variable.parameter",
                    "support.function.builtin.rust",
                    "storage.type.function.coffee",
                    "entity.name.variable.parameter",
                    "punctuation.separator.hash.cs",
                    "constant.other.symbol.ruby punctuation.definition.constant.ruby",
                    "constant.other.symbol.hashkey.ruby punctuation.definition.constant.ruby",
                    "meta.function.parameters variable.other",
                    "entity.name.type.annotation.kotlin",
                    "storage.type.objc",
                    "parameter.variable.function",
                    "markup punctuation.definition",
                    "punctuation.section.directive",
                    "punctuation.definition.preprocessor",
                    "source.ruby punctuation.definition.variable",
                    "support.function.textbf",
                    "source.graphql support.type.builtin",
                    "source.ocaml variable.interpolation string",
                    "entity.name.function.definition.special.constructor",
                    "entity.name.function.definition.special.member.destructor.",
                    "meta.function.parameters variable punctuation.definition.variable.php",
                    "source.wsd keyword.other.activity",
                    "keyword.control.class.ruby",
                    "keyword.control.def.ruby",
                    "keyword.function.go",
                    "keyword.other.fn.rust",
                    "markup.other.anchor",
                    "markup.list.bullet",
                    "markup.list punctuation.definition",
                    "keyword.control.default",
                    "punctuation.section",
                    "punctuation.separator",
                    "punctuation.terminator",
                    "markup.bold.markdown",
                    "source.zig storage.type.function",
                    "entity.name.type"
                ],
                "settings": {
                    "fontStyle": "bold"
                }
            },
            {
                "name": "BOLD-ITALIC",
                "scope": [
                    "markup.quote markup.bold",
                    "text.html punctuation.section.embedded",
                    "variable.other.c",
                    "storage.modifier.lifetime.rust",
                    "entity.name.lifetime.rust",
                    "source.rust meta.attribute.rust",
                    "meta.attribute.id entity.other.attribute-name",
                    "source.ocaml punctuation.definition.tag emphasis",
                    "source.tf entity.name",
                    "markup.quote punctuation.definition",
                    "markup.fenced_code punctuation.definition",
                    "fenced_code.block.language"
                ],
                "settings": {
                    "fontStyle": "bold italic"
                }
            },
            {
                "name": "NORMAL",
                "scope": [
                    "keyword.begin.tag.ejs",
                    "source.python meta.function.decorator.python support.type.python",
                    "source.cs keyword.other",
                    "keyword.other.var.cs",
                    "source.go keyword",
                    "storage.modifier.static.rust",
                    "variable.parameter.r",
                    "variable.parameter.handlebars",
                    "storage.modifier.import",
                    "storage.modifier.package",
                    "meta.class.identifier storage.modifier",
                    "keyword.operator.other.powershell",
                    "source.css variable.parameter",
                    "string.interpolated variable.parameter",
                    "source.apacheconf keyword",
                    "keyword.other.julia",
                    "storage.modifier.using.vala",
                    "source.objc keyword.other.property.attribute",
                    "source.sql keyword.other",
                    "keyword.other.using.vala",
                    "keyword.operator.function.infix",
                    "keyword.control.directive",
                    "keyword.other.rust",
                    "keyword.other.declaration-specifier.swift",
                    "entity.name.function.swift",
                    "keyword.control.class",
                    "keyword.control.def",
                    "punctuation.definition.variable",
                    "entity.name.section.latex",
                    "source.ocaml keyword markup.underline",
                    "source.ocaml constant.language constant.numeric entity.other.attribute-name.id.css",
                    "source.reason entity.other.attribute-name constant.language constant.numeric",
                    "keyword.format.specifier.fsharp",
                    "entity.name.section.fsharp",
                    "binding.fsharp keyword",
                    "binding.fsharp keyword.symbol",
                    "record.fsharp keyword",
                    "keyword.symbol.fsharp",
                    "entity.name.section.fsharp keyword",
                    "namespace.open.fsharp keyword",
                    "namespace.open.fsharp entity",
                    "storage.type",
                    "source.cpp keyword.other",
                    "source.c keyword.other",
                    "keyword.other.unit",
                    "storage.modifier.array.bracket",
                    "meta.import.haskell keyword",
                    "keyword.declaration.dart",
                    "source.wsd keyword.other",
                    "keyword.other.skinparam",
                    "source.css keyword.control",
                    "source.css keyword.operator",
                    "keyword.language.gherkin.feature.scenario",
                    "keyword.control.cucumber.table",
                    "source.toml entity.other.attribute-name",
                    "source.toml keyword",
                    "keyword.other.nim",
                    "source.nim keyword.other.common.function",
                    "source.nim keyword.other",
                    "source.scala keyword.declaration",
                    "source.scala entity.name.class.declaration",
                    "keyword.control.lua",
                    "source.css punctuation.section",
                    "punctuation.section.embedded",
                    "source.c punctuation.section",
                    "source.cpp punctuation.section",
                    "source.java punctuation.section",
                    "source.php punctuation.section",
                    "source.powershell punctuation.section",
                    "source.r punctuation.section",
                    "source.ruby punctuation.section",
                    "source.swift punctuation.section",
                    "source.objc punctuation.section",
                    "source.zig keyword.constant.bool",
                    "source.zig keyword.default",
                    "source.zig keyword.statement",
                    "source.zig keyword.constant.default"
                ],
                "settings": {
                    "fontStyle": ""
                }
            },
            {
                "name": "STRIKETHROUGH",
                "scope": [
                    "markup.strikethrough"
                ],
                "settings": {
                    "fontStyle": "strikethrough"
                }
            },
        ], /**
         * Overrides workbench UI Elements
         */
        workbench: {
            /**
            * General elements style
            */
            'focusBorder': `${colors.scheme.focusBorder}00`,
            'editorRuler.foreground': colors.scheme.guides,
            'widget.shadow': colors.scheme.shadow,
            'scrollbar.shadow': colors.scheme.shadow,
            'editorLink.activeForeground': colors.scheme.foreground,
            'selection.background': `${colors.scheme.lineHighlight}80`,
            'progressBar.background': colors.scheme.defaultAccent,
            'debugToolBar.background': colors.scheme.background,
            'pickerGroup.foreground': colors.scheme.defaultAccent,
            'editorMarkerNavigation.background': `${colors.scheme.foreground}05`,
            'tree.indentGuidesStroke': colors.scheme.guides,
            'terminalCursor.foreground': colors.scheme.base.yellow,
            'terminalCursor.background': colors.scheme.base.black,
            'editorWhitespace.foreground': `${colors.scheme.foreground}40`,
            /**
            * InputOption
            */
            'inputOption.activeBackground': `${colors.scheme.foreground}30`,
            'inputOption.activeBorder': `${colors.scheme.foreground}30`,
            /**
            * Buttons style
            */
            'button.background': colors.scheme.selection,
            // 'button.hoverBackground': colors.scheme.shade2,
            /**
            * Links style
            */
            'textLink.foreground': colors.scheme.defaultAccent,
            'textLink.activeForeground': colors.scheme.foreground,
            /**
            * Sidebar style
            */
            'sideBar.background': colors.scheme.backgroundAlt,
            'sideBar.foreground': colors.scheme.sidebarForeground,
            'sideBar.border': `${colors.scheme.contrastBorder}60`,
            /**
            * Sidebar elements style
            */
            'sideBarTitle.foreground': colors.scheme.foreground,
            'sideBarSectionHeader.background': colors.scheme.backgroundAlt,
            'sideBarSectionHeader.border': `${colors.scheme.contrastBorder}60`,
            // "sideBarSectionHeader.foreground": colors.scheme.foreground,
            /**
            * Window panels style (terminal, global search)
            */
            'panel.border': `${colors.scheme.contrastBorder}60`,
            'panel.background': colors.scheme.backgroundAlt,
            'panel.dropBackground': colors.scheme.foreground,
            'sash.hoverBorder': `${colors.scheme.defaultAccent}50`,
            /**
            * Window panels elements style
            */
            'panelTitle.inactiveForeground': colors.scheme.foreground,
            'panelTitle.activeForeground': colors.scheme.tabActiveForeground,
            'panelTitle.activeBorder': colors.scheme.caret,
            /**
            * Code Editor style
            */
            'editor.background': colors.scheme.background,
            'editor.foreground': colors.scheme.foreground,
            'editor.lineHighlightBackground': `${colors.scheme.lineHighlight}50`,
            'editor.selectionHighlightBackground': colors.scheme.caret,
            'editor.lineHighlightBorder': `${colors.scheme.lineHighlight}00`,
            'editor.findMatchBackground': colors.scheme.findMatchBackground,
            'editor.findMatchHighlightBackground': colors.scheme.findMatchHighlightBackground,
            'editor.findMatchBorder': colors.scheme.defaultAccent,
            'editor.findMatchHighlightBorder': colors.scheme.findMatchHighlightBorder,
            // Editor Indent guides
            'editorIndentGuide.background': `${colors.scheme.guides}70`,
            'editorIndentGuide.activeBackground': colors.scheme.guides,
            // Editor line number
            'editorLineNumber.foreground': colors.scheme.lineNumbers,
            'editorLineNumber.activeForeground': colors.scheme.sidebarForeground,
            // Editor tab groups
            'editorGroupHeader.tabsBackground': colors.scheme.background,
            'editorGroup.border': colors.scheme.shadow,
            // Editor gutter
            'editorGutter.modifiedBackground': `${colors.scheme.base.blue}60`,
            'editorGutter.addedBackground': `${colors.scheme.base.green}60`,
            'editorGutter.deletedBackground': `${colors.scheme.base.red}60`,
            /**
            * Activity bar style
            */
            'activityBar.background': colors.scheme.backgroundAlt,
            'activityBar.border': `${colors.scheme.contrastBorder}60`,
            'activityBar.foreground': colors.scheme.foreground,
            'activityBar.activeBorder': colors.scheme.caret,
            /**
            * Activity bar badges style
            */
            'activityBarBadge.background': colors.scheme.function,
            'activityBarBadge.foreground': colors.scheme.base.black,
            /**
            * Global badges style
            */
            'badge.background': `${colors.scheme.lineHighlight}30`,
            'badge.foreground': colors.scheme.comment,
            /**
            * Extensions badge style
            */
            // 'extensionBadge.remoteBackground': colors.scheme.shade3,
            'extensionBadge.remoteForeground': colors.scheme.foreground,
            /**
            * Scrollbar style
            */
            'scrollbarSlider.background': colors.scheme.scrollbars,
            'scrollbarSlider.hoverBackground': colors.scheme.scrollbarsHover,
            'scrollbarSlider.activeBackground': `${colors.scheme.defaultAccent}b6`,
            /**
            * Tabs style
            */
            'tab.activeBorder': colors.scheme.caret,
            'tab.activeModifiedBorder': colors.scheme.sidebarForeground,
            'tab.unfocusedActiveBorder': colors.scheme.comment,
            'tab.activeForeground': colors.scheme.tabActiveForeground,
            'tab.inactiveForeground': colors.scheme.sidebarForeground,
            'tab.inactiveBackground': colors.scheme.background,
            'tab.activeBackground': colors.scheme.background,
            'tab.unfocusedActiveForeground': colors.scheme.foreground,
            'tab.border': colors.scheme.background,
            // 'tab.inactiveModifiedBorder': colors.scheme.shade5,
            /**
            * Editor overlay widgets style (find/replace..)
            */
            'editorWidget.background': colors.scheme.backgroundAlt,
            'editorWidget.resizeBorder': colors.scheme.defaultAccent,
            'editorWidget.border': colors.scheme.defaultAccent,
            /**
            * Notebook style
            */
            'notebook.focusedCellBorder': colors.scheme.defaultAccent,
            'notebook.inactiveFocusedCellBorder': `${colors.scheme.defaultAccent}50`,
            /**
            * Statusbar style
            */
            'statusBar.noFolderBackground': colors.scheme.background,
            'statusBar.border': `${colors.scheme.contrastBorder}60`,
            'statusBar.background': colors.scheme.backgroundAlt,
            'statusBar.foreground': colors.scheme.statusbarForeground,
            'statusBar.debuggingBackground': colors.scheme.base.purple,
            'statusBar.debuggingForeground': colors.scheme.base.white,
            /**
            * Statusbar items style
            */
            'statusBarItem.hoverBackground': `${colors.scheme.comment}20`,
            'statusBarItem.remoteForeground': colors.scheme.base.black,
            'statusBarItem.remoteBackground': colors.scheme.function,
            /**
            * Matching brackets style
            */
            'editorBracketMatch.border': colors.scheme.caret,
            'editorBracketMatch.background': colors.scheme.background,
            /**
            * Editor Overview Ruler style
            */
            'editorOverviewRuler.findMatchForeground': colors.scheme.defaultAccent,
            'editorOverviewRuler.border': colors.scheme.background,
            'editorOverviewRuler.errorForeground': `${colors.scheme.base.red}40`,
            'editorOverviewRuler.infoForeground': `${colors.scheme.base.blue}40`,
            'editorOverviewRuler.warningForeground': `${colors.scheme.base.yellow}40`,
            /**
            * Squigglies style
            */
            'editorInfo.foreground': `${colors.scheme.base.blue}70`,
            'editorWarning.foreground': `${colors.scheme.base.yellow}70`,
            'editorError.foreground': `${colors.scheme.base.red}70`,
            /**
            * Popop dialogs style
            */
            'editorHoverWidget.background': colors.scheme.background,
            'editorHoverWidget.border': colors.scheme.inputBorder,
            /**
            * Title bar style
            */
            'titleBar.activeBackground': colors.scheme.backgroundAlt,
            'titleBar.activeForeground': colors.scheme.foreground,
            'titleBar.inactiveBackground': colors.scheme.backgroundAlt,
            'titleBar.inactiveForeground': colors.scheme.sidebarForeground,
            'titleBar.border': `${colors.scheme.contrastBorder}60`,
            /**
            * Textfield and inputs style
            */
            'input.background': colors.scheme.inputBackground,
            'input.foreground': colors.scheme.foreground,
            'input.placeholderForeground': `${colors.scheme.foreground}60`,
            'input.border': colors.scheme.inputBorder,
    
            /**
            * Inputs validation style
            */
            'inputValidation.errorBorder': `${colors.scheme.base.red}`,
            'inputValidation.infoBorder': `${colors.scheme.base.blue}`,
            'inputValidation.warningBorder': `${colors.scheme.base.yellow}`,
            /**
            * Dropdown menu style
            */
            'dropdown.background': colors.scheme.background,
            'dropdown.border': colors.scheme.inputBorder,
            /**
             * Quick Panel
             */
            'quickInput.background': colors.scheme.background,
            'quickInput.foreground': colors.scheme.sidebarForeground,
            /**
            * Lists style
            */
            'list.hoverForeground': colors.scheme.listHoverForeground,
            'list.hoverBackground': colors.scheme.backgroundAlt,
            'list.activeSelectionBackground': colors.scheme.backgroundAlt,
            'list.activeSelectionForeground': colors.scheme.defaultAccent,
            'list.inactiveSelectionForeground': colors.scheme.function,
            'list.inactiveSelectionBackground': colors.scheme.inactiveSelectionBackground,
            'list.focusBackground': `${colors.scheme.foreground}20`,
            'quickInput.list.focusBackground': `${colors.scheme.foreground}20`,
            'list.focusForeground': colors.scheme.foreground,
            'list.highlightForeground': colors.scheme.defaultAccent,
            // 'list.dropBackground': colors.scheme.shade2,
            /**
            * Editor suggest widget style
            */
            'editorSuggestWidget.background': colors.scheme.background,
            'editorSuggestWidget.foreground': colors.scheme.foreground,
            'editorSuggestWidget.highlightForeground': colors.scheme.defaultAccent,
            'editorSuggestWidget.selectedBackground': `${colors.scheme.lineHighlight}50`,
            'editorSuggestWidget.border': colors.scheme.inputBorder,
            /**
            * Editor diff editor style
            */
            'diffEditor.insertedTextBackground': `${colors.scheme.base.cyan}20`,
            'diffEditor.removedTextBackground': `${colors.scheme.base.pink}20`,
            /**
            * Notifications
            */
            'notifications.background': colors.scheme.background,
            'notifications.foreground': colors.scheme.foreground,
            'notificationLink.foreground': colors.scheme.defaultAccent,
            /**
            * Extensions button style
            */
            'extensionButton.prominentBackground': `${colors.scheme.base.green}90`,
            'extensionButton.prominentHoverBackground': colors.scheme.base.green,
            'extensionButton.prominentForeground': colors.scheme.foreground,
            /**
            * Peekview window style
            */
            'peekView.border': colors.scheme.shadow,
            'peekViewEditor.background': `${colors.scheme.foreground}05`,
            'peekViewTitle.background': `${colors.scheme.foreground}05`,
            'peekViewResult.background': `${colors.scheme.foreground}05`,
            'peekViewEditorGutter.background': `${colors.scheme.foreground}05`,
            'peekViewTitleDescription.foreground': `${colors.scheme.foreground}60`,
            'peekViewResult.matchHighlightBackground': colors.scheme.selection,
            'peekViewEditor.matchHighlightBackground': colors.scheme.selection,
            'peekViewResult.selectionBackground': `${colors.scheme.sidebarForeground}70`,
            /**
            * GIT decorations style
            */
            'gitDecoration.deletedResourceForeground': `${colors.scheme.base.red}90`,
            'gitDecoration.conflictingResourceForeground': `${colors.scheme.base.yellow}90`,
            'gitDecoration.modifiedResourceForeground': `${colors.scheme.base.blue}90`,
            'gitDecoration.untrackedResourceForeground': `${colors.scheme.base.green}90`,
            'gitDecoration.ignoredResourceForeground': `${colors.scheme.sidebarForeground}90`,
            /**
            * Breadcrumb style
            */
            'breadcrumb.background': colors.scheme.background,
            'breadcrumb.foreground': colors.scheme.sidebarForeground,
            'breadcrumb.focusForeground': colors.scheme.foreground,
            'breadcrumb.activeSelectionForeground': colors.scheme.defaultAccent,
            'breadcrumbPicker.background': colors.scheme.backgroundAlt,
            /**
            * Custom menus style
            */
            'menu.background': colors.scheme.background,
            'menu.foreground': colors.scheme.foreground,
            'menu.selectionBackground': `${colors.scheme.lineHighlight}50`,
            'menu.selectionForeground': colors.scheme.defaultAccent,
            'menu.selectionBorder': colors.scheme.inactiveSelectionBackground,
            'menu.separatorBackground': colors.scheme.foreground,
            /**
            * Menu Bar style
            */
            'menubar.selectionBackground': colors.scheme.inactiveSelectionBackground,
            'menubar.selectionForeground': colors.scheme.defaultAccent,
            'menubar.selectionBorder': colors.scheme.inactiveSelectionBackground,
            /**
            * Settings elements style
            */
            'settings.dropdownForeground': colors.scheme.foreground,
            'settings.dropdownBackground': colors.scheme.backgroundAlt,
            'settings.numberInputForeground': colors.scheme.foreground,
            'settings.numberInputBackground': colors.scheme.backgroundAlt,
            'settings.textInputForeground': colors.scheme.foreground,
            'settings.textInputBackground': colors.scheme.backgroundAlt,
            'settings.headerForeground': colors.scheme.defaultAccent,
            'settings.modifiedItemIndicator': colors.scheme.defaultAccent,
            'settings.checkboxBackground': colors.scheme.backgroundAlt,
            'settings.checkboxForeground': colors.scheme.foreground,
            /**
            * List Filter Widget style
            */
            'listFilterWidget.background': colors.scheme.inactiveSelectionBackground,
            'listFilterWidget.outline': colors.scheme.inactiveSelectionBackground,
            'listFilterWidget.noMatchesOutline': colors.scheme.inactiveSelectionBackground,
            /**
            * Debug Console
            */
            'debugConsole.errorForeground': colors.scheme.base.red,
            'debugConsole.infoForeground': colors.scheme.base.cyan,
            'debugConsole.warningForeground': colors.scheme.base.yellow
        },
        /**
        * Define the integrated shell
        * color palette
        */
        terminal: {
            black: colors.scheme.base.black,
            blue: colors.scheme.base.blue,
            brightBlack: colors.scheme.comment,
            brightBlue: colors.scheme.base.blue,
            brightCyan: colors.scheme.base.cyan,
            brightGreen: colors.scheme.base.green,
            brightMagenta: colors.scheme.base.purple,
            brightRed: colors.scheme.base.red,
            brightWhite: colors.scheme.base.white,
            brightYellow: colors.scheme.base.yellow,
            cyan: colors.scheme.base.cyan,
            green: colors.scheme.base.green,
            magenta: colors.scheme.base.purple,
            red: colors.scheme.base.red,
            white: colors.scheme.base.white,
            yellow: colors.scheme.base.yellow
        },
        /**
        * Define workbench colors.scheme
        */
        ui: {
            // Highlights matches from the find widget
            // currentFindMatchHighlight: colors.scheme.shade5,
            // Set the editor cursor color
            cursor: colors.scheme.caret,
            // Ighlights matches from the find widget
            findMatchHighlight: colors.scheme.foreground,
            // Highlights the selected area for "find in selection"
            findRangeHighlight: `${colors.scheme.base.yellow}30`,
            // Set color for invisible characters/whitespaces
            invisibles: colors.scheme.guides,
            // Highlights text which matches the selected text
            selection: colors.scheme.selection,
            // Highlights text inside selected area
            selectionHighlight: `${colors.scheme.base.yellow}50`,
            // When the cursor is on a symbol, highlights places that symbol is read
            wordHighlight: `${colors.scheme.base.pink}30`,
            // When the cursor is on a symbol, highlights places that symbol is written
            wordHighlightStrong: `${colors.scheme.base.green}30`
        }
    };
    }

