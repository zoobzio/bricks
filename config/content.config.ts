export default {
  highlight: {
    theme: "blog",
    themes: [
      {
        displayName: "Blog",
        name: "blog",
        semanticHighlighting: true,
        semanticTokenColors: {
          customLiteral: "var(--shiki-function)",
          newOperator: "var(--shiki-keyword)",
          numberLiteral: "var(--shiki-number)",
          stringLiteral: "var(--shiki-string)",
        },
        tokenColors: [
          {
            scope: [
              "meta.embedded",
              "source.groovy.embedded",
              "string meta.image.inline.markdown",
              "variable.legacy.builtin.python",
            ],
            settings: {
              foreground: "var(--shiki-punctuation)",
            },
          },
          {
            scope: "emphasis",
            settings: {
              fontStyle: "italic",
            },
          },
          {
            scope: "strong",
            settings: {
              fontStyle: "bold",
            },
          },
          {
            scope: "header",
            settings: {
              foreground: "#000080",
            },
          },
          {
            scope: "comment",
            settings: {
              foreground: "var(--shiki-comment)",
            },
          },
          {
            scope: "constant.language",
            settings: {
              foreground: "var(--shiki-constant)",
            },
          },
          {
            scope: [
              "constant.numeric",
              "variable.other.enummember",
              "keyword.operator.plus.exponent",
              "keyword.operator.minus.exponent",
            ],
            settings: {
              foreground: "var(--shiki-number)",
            },
          },
          {
            scope: "constant.regexp",
            settings: {
              foreground: "#646695",
            },
          },
          {
            scope: "entity.name.tag",
            settings: {
              foreground: "var(--shiki-constant)",
            },
          },
          {
            scope: "entity.name.tag.css",
            settings: {
              foreground: "#d7ba7d",
            },
          },
          {
            scope: "entity.other.attribute-name",
            settings: {
              foreground: "#9cdcfe",
            },
          },
          {
            scope: [
              "entity.other.attribute-name.class.css",
              "entity.other.attribute-name.class.mixin.css",
              "entity.other.attribute-name.id.css",
              "entity.other.attribute-name.parent-selector.css",
              "entity.other.attribute-name.pseudo-class.css",
              "entity.other.attribute-name.pseudo-element.css",
              "source.css.less entity.other.attribute-name.id",
              "entity.other.attribute-name.scss",
            ],
            settings: {
              foreground: "#d7ba7d",
            },
          },
          {
            scope: "invalid",
            settings: {
              foreground: "#f44747",
            },
          },
          {
            scope: "markup.underline",
            settings: {
              fontStyle: "underline",
            },
          },
          {
            scope: "markup.bold",
            settings: {
              fontStyle: "bold",
              foreground: "var(--shiki-constant)",
            },
          },
          {
            scope: "markup.heading",
            settings: {
              fontStyle: "bold",
              foreground: "var(--shiki-constant)",
            },
          },
          {
            scope: "markup.italic",
            settings: {
              fontStyle: "italic",
            },
          },
          {
            scope: "markup.strikethrough",
            settings: {
              fontStyle: "strikethrough",
            },
          },
          {
            scope: "markup.inserted",
            settings: {
              foreground: "var(--shiki-number)",
            },
          },
          {
            scope: "markup.deleted",
            settings: {
              foreground: "var(--shiki-string)",
            },
          },
          {
            scope: "markup.changed",
            settings: {
              foreground: "var(--shiki-constant)",
            },
          },
          {
            scope: "punctuation.definition.quote.begin.markdown",
            settings: {
              foreground: "var(--shiki-comment)",
            },
          },
          {
            scope: "punctuation.definition.list.begin.markdown",
            settings: {
              foreground: "#6796e6",
            },
          },
          {
            scope: "markup.inline.raw",
            settings: {
              foreground: "var(--shiki-string)",
            },
          },
          {
            scope: "punctuation.definition.tag",
            settings: {
              foreground: "#808080",
            },
          },
          {
            scope: ["meta.preprocessor", "entity.name.function.preprocessor"],
            settings: {
              foreground: "var(--shiki-constant)",
            },
          },
          {
            scope: "meta.preprocessor.string",
            settings: {
              foreground: "var(--shiki-string)",
            },
          },
          {
            scope: "meta.preprocessor.numeric",
            settings: {
              foreground: "var(--shiki-number)",
            },
          },
          {
            scope: "meta.structure.dictionary.key.python",
            settings: {
              foreground: "#9cdcfe",
            },
          },
          {
            scope: "meta.diff.header",
            settings: {
              foreground: "var(--shiki-constant)",
            },
          },
          {
            scope: "storage",
            settings: {
              foreground: "var(--shiki-constant)",
            },
          },
          {
            scope: "storage.type",
            settings: {
              foreground: "var(--shiki-constant)",
            },
          },
          {
            scope: ["storage.modifier", "keyword.operator.noexcept"],
            settings: {
              foreground: "var(--shiki-constant)",
            },
          },
          {
            scope: ["string", "meta.embedded.assembly"],
            settings: {
              foreground: "var(--shiki-string)",
            },
          },
          {
            scope: "string.tag",
            settings: {
              foreground: "var(--shiki-string)",
            },
          },
          {
            scope: "string.value",
            settings: {
              foreground: "var(--shiki-string)",
            },
          },
          {
            scope: "string.regexp",
            settings: {
              foreground: "#d16969",
            },
          },
          {
            scope: [
              "punctuation.definition.template-expression.begin",
              "punctuation.definition.template-expression.end",
              "punctuation.section.embedded",
            ],
            settings: {
              foreground: "var(--shiki-constant)",
            },
          },
          {
            scope: ["meta.template.expression"],
            settings: {
              foreground: "var(--shiki-parameter)",
            },
          },
          {
            scope: [
              "support.type.vendored.property-name",
              "support.type.property-name",
              "variable.css",
              "variable.scss",
              "variable.other.less",
              "source.coffee.embedded",
            ],
            settings: {
              foreground: "#9cdcfe",
            },
          },
          {
            scope: "keyword",
            settings: {
              foreground: "var(--shiki-constant)",
            },
          },
          {
            scope: "keyword.control",
            settings: {
              foreground: "var(--shiki-constant)",
            },
          },
          {
            scope: "keyword.operator",
            settings: {
              foreground: "var(--shiki-parameter)",
            },
          },
          {
            scope: [
              "keyword.operator.new",
              "keyword.operator.expression",
              "keyword.operator.cast",
              "keyword.operator.sizeof",
              "keyword.operator.alignof",
              "keyword.operator.typeid",
              "keyword.operator.alignas",
              "keyword.operator.instanceof",
              "keyword.operator.logical.python",
              "keyword.operator.wordlike",
            ],
            settings: {
              foreground: "var(--shiki-constant)",
            },
          },
          {
            scope: "keyword.other.unit",
            settings: {
              foreground: "var(--shiki-number)",
            },
          },
          {
            scope: [
              "punctuation.section.embedded.begin.php",
              "punctuation.section.embedded.end.php",
            ],
            settings: {
              foreground: "var(--shiki-constant)",
            },
          },
          {
            scope: "support.function.git-rebase",
            settings: {
              foreground: "#9cdcfe",
            },
          },
          {
            scope: "constant.sha.git-rebase",
            settings: {
              foreground: "var(--shiki-number)",
            },
          },
          {
            scope: [
              "storage.modifier.import.java",
              "variable.language.wildcard.java",
              "storage.modifier.package.java",
            ],
            settings: {
              foreground: "var(--shiki-parameter)",
            },
          },
          {
            scope: "variable.language",
            settings: {
              foreground: "var(--shiki-constant)",
            },
          },
          {
            scope: [
              "entity.name.function",
              "support.function",
              "support.constant.handlebars",
              "source.powershell variable.other.member",
              "entity.name.operator.custom-literal",
            ],
            settings: {
              foreground: "var(--shiki-function)",
            },
          },
          {
            scope: [
              "support.class",
              "support.type",
              "entity.name.type",
              "entity.name.namespace",
              "entity.other.attribute",
              "entity.name.scope-resolution",
              "entity.name.class",
              "storage.type.numeric.go",
              "storage.type.byte.go",
              "storage.type.boolean.go",
              "storage.type.string.go",
              "storage.type.uintptr.go",
              "storage.type.error.go",
              "storage.type.rune.go",
              "storage.type.cs",
              "storage.type.generic.cs",
              "storage.type.modifier.cs",
              "storage.type.variable.cs",
              "storage.type.annotation.java",
              "storage.type.generic.java",
              "storage.type.java",
              "storage.type.object.array.java",
              "storage.type.primitive.array.java",
              "storage.type.primitive.java",
              "storage.type.token.java",
              "storage.type.groovy",
              "storage.type.annotation.groovy",
              "storage.type.parameters.groovy",
              "storage.type.generic.groovy",
              "storage.type.object.array.groovy",
              "storage.type.primitive.array.groovy",
              "storage.type.primitive.groovy",
            ],
            settings: {
              foreground: "var(--shiki-text)",
            },
          },
          {
            scope: [
              "meta.type.cast.expr",
              "meta.type.new.expr",
              "support.constant.math",
              "support.constant.dom",
              "support.constant.json",
              "entity.other.inherited-class",
            ],
            settings: {
              foreground: "var(--shiki-text)",
            },
          },
          {
            scope: [
              "keyword.control",
              "source.cpp keyword.operator.new",
              "keyword.operator.delete",
              "keyword.other.using",
              "keyword.other.directive.using",
              "keyword.other.operator",
              "entity.name.operator",
            ],
            settings: {
              foreground: "var(--shiki-keyword)",
            },
          },
          {
            scope: [
              "variable",
              "meta.definition.variable.name",
              "support.variable",
              "entity.name.variable",
              "constant.other.placeholder",
            ],
            settings: {
              foreground: "var(--shiki-parameter)",
            },
          },
          {
            scope: ["variable.other.constant", "variable.other.enummember"],
            settings: {
              foreground: "var(--shiki-variable)",
            },
          },
          {
            scope: ["meta.object-literal.key"],
            settings: {
              foreground: "var(--shiki-parameter)",
            },
          },
          {
            scope: [
              "support.constant.property-value",
              "support.constant.font-name",
              "support.constant.media-type",
              "support.constant.media",
              "constant.other.color.rgb-value",
              "constant.other.rgb-value",
              "support.constant.color",
            ],
            settings: {
              foreground: "var(--shiki-string)",
            },
          },
          {
            scope: [
              "punctuation.definition.group.regexp",
              "punctuation.definition.group.assertion.regexp",
              "punctuation.definition.character-class.regexp",
              "punctuation.character.set.begin.regexp",
              "punctuation.character.set.end.regexp",
              "keyword.operator.negation.regexp",
              "support.other.parenthesis.regexp",
            ],
            settings: {
              foreground: "var(--shiki-string)",
            },
          },
          {
            scope: [
              "constant.character.character-class.regexp",
              "constant.other.character-class.set.regexp",
              "constant.other.character-class.regexp",
              "constant.character.set.regexp",
            ],
            settings: {
              foreground: "#d16969",
            },
          },
          {
            scope: [
              "keyword.operator.or.regexp",
              "keyword.control.anchor.regexp",
            ],
            settings: {
              foreground: "var(--shiki-function)",
            },
          },
          {
            scope: "keyword.operator.quantifier.regexp",
            settings: {
              foreground: "#d7ba7d",
            },
          },
          {
            scope: ["constant.character", "constant.other.option"],
            settings: {
              foreground: "var(--shiki-constant)",
            },
          },
          {
            scope: "constant.character.escape",
            settings: {
              foreground: "#d7ba7d",
            },
          },
          {
            scope: "entity.name.label",
            settings: {
              foreground: "#C8C8C8",
            },
          },
        ],
        type: "dark",
      },
    ],
  },
};
