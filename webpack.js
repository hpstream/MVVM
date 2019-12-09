[
  {
    test: {},
    use: [
      {
        loader:
          "/Users/wanba/code/mycode/mvvm/node_modules/cache-loader/dist/cjs.js",
        options: {
          cacheDirectory:
            "/Users/wanba/code/mycode/mvvm/node_modules/.cache/vue-loader",
          cacheIdentifier: "6632bdfc"
        }
      },
      {
        loader:
          "/Users/wanba/code/mycode/mvvm/node_modules/vue-loader/lib/index.js",
        options: {
          compilerOptions: { whitespace: "condense" },
          cacheDirectory:
            "/Users/wanba/code/mycode/mvvm/node_modules/.cache/vue-loader",
          cacheIdentifier: "6632bdfc"
        }
      }
    ]
  },
  {
    test: {},
    use: [
      {
        loader:
          "/Users/wanba/code/mycode/mvvm/node_modules/url-loader/dist/cjs.js",
        options: {
          limit: 4096,
          fallback: {
            loader: "file-loader",
            options: { name: "img/[name].[hash:8].[ext]" }
          }
        }
      }
    ]
  },
  {
    test: {},
    use: [
      {
        loader:
          "/Users/wanba/code/mycode/mvvm/node_modules/file-loader/dist/cjs.js",
        options: { name: "img/[name].[hash:8].[ext]" }
      }
    ]
  },
  {
    test: {},
    use: [
      {
        loader:
          "/Users/wanba/code/mycode/mvvm/node_modules/url-loader/dist/cjs.js",
        options: {
          limit: 4096,
          fallback: {
            loader: "file-loader",
            options: { name: "media/[name].[hash:8].[ext]" }
          }
        }
      }
    ]
  },
  {
    test: {},
    use: [
      {
        loader:
          "/Users/wanba/code/mycode/mvvm/node_modules/url-loader/dist/cjs.js",
        options: {
          limit: 4096,
          fallback: {
            loader: "file-loader",
            options: { name: "fonts/[name].[hash:8].[ext]" }
          }
        }
      }
    ]
  },
  {
    test: {},
    oneOf: [
      { resourceQuery: {}, use: [{ loader: "pug-plain-loader" }] },
      { use: [{ loader: "raw-loader" }, { loader: "pug-plain-loader" }] }
    ]
  },
  {
    test: {},
    oneOf: [
      {
        resourceQuery: {},
        use: [
          {
            loader:
              "/Users/wanba/code/mycode/mvvm/node_modules/vue-style-loader/index.js",
            options: { sourceMap: false, shadowMode: false }
          },
          {
            loader:
              "/Users/wanba/code/mycode/mvvm/node_modules/css-loader/dist/cjs.js",
            options: {
              sourceMap: false,
              importLoaders: 2,
              modules: { localIdentName: "[name]_[local]_[hash:base64:5]" }
            }
          },
          {
            loader:
              "/Users/wanba/code/mycode/mvvm/node_modules/postcss-loader/src/index.js",
            options: { sourceMap: false, plugins: [null] }
          }
        ]
      },
      {
        resourceQuery: {},
        use: [
          {
            loader:
              "/Users/wanba/code/mycode/mvvm/node_modules/vue-style-loader/index.js",
            options: { sourceMap: false, shadowMode: false }
          },
          {
            loader:
              "/Users/wanba/code/mycode/mvvm/node_modules/css-loader/dist/cjs.js",
            options: { sourceMap: false, importLoaders: 2 }
          },
          {
            loader:
              "/Users/wanba/code/mycode/mvvm/node_modules/postcss-loader/src/index.js",
            options: { sourceMap: false, plugins: [null] }
          }
        ]
      },
      {
        test: {},
        use: [
          {
            loader:
              "/Users/wanba/code/mycode/mvvm/node_modules/vue-style-loader/index.js",
            options: { sourceMap: false, shadowMode: false }
          },
          {
            loader:
              "/Users/wanba/code/mycode/mvvm/node_modules/css-loader/dist/cjs.js",
            options: {
              sourceMap: false,
              importLoaders: 2,
              modules: { localIdentName: "[name]_[local]_[hash:base64:5]" }
            }
          },
          {
            loader:
              "/Users/wanba/code/mycode/mvvm/node_modules/postcss-loader/src/index.js",
            options: { sourceMap: false, plugins: [null] }
          }
        ]
      },
      {
        use: [
          {
            loader:
              "/Users/wanba/code/mycode/mvvm/node_modules/vue-style-loader/index.js",
            options: { sourceMap: false, shadowMode: false }
          },
          {
            loader:
              "/Users/wanba/code/mycode/mvvm/node_modules/css-loader/dist/cjs.js",
            options: { sourceMap: false, importLoaders: 2 }
          },
          {
            loader:
              "/Users/wanba/code/mycode/mvvm/node_modules/postcss-loader/src/index.js",
            options: { sourceMap: false, plugins: [null] }
          }
        ]
      }
    ]
  },
  {
    test: {},
    oneOf: [
      {
        resourceQuery: {},
        use: [
          {
            loader:
              "/Users/wanba/code/mycode/mvvm/node_modules/vue-style-loader/index.js",
            options: { sourceMap: false, shadowMode: false }
          },
          {
            loader:
              "/Users/wanba/code/mycode/mvvm/node_modules/css-loader/dist/cjs.js",
            options: {
              sourceMap: false,
              importLoaders: 2,
              modules: { localIdentName: "[name]_[local]_[hash:base64:5]" }
            }
          },
          {
            loader:
              "/Users/wanba/code/mycode/mvvm/node_modules/postcss-loader/src/index.js",
            options: { sourceMap: false, plugins: [null] }
          }
        ]
      },
      {
        resourceQuery: {},
        use: [
          {
            loader:
              "/Users/wanba/code/mycode/mvvm/node_modules/vue-style-loader/index.js",
            options: { sourceMap: false, shadowMode: false }
          },
          {
            loader:
              "/Users/wanba/code/mycode/mvvm/node_modules/css-loader/dist/cjs.js",
            options: { sourceMap: false, importLoaders: 2 }
          },
          {
            loader:
              "/Users/wanba/code/mycode/mvvm/node_modules/postcss-loader/src/index.js",
            options: { sourceMap: false, plugins: [null] }
          }
        ]
      },
      {
        test: {},
        use: [
          {
            loader:
              "/Users/wanba/code/mycode/mvvm/node_modules/vue-style-loader/index.js",
            options: { sourceMap: false, shadowMode: false }
          },
          {
            loader:
              "/Users/wanba/code/mycode/mvvm/node_modules/css-loader/dist/cjs.js",
            options: {
              sourceMap: false,
              importLoaders: 2,
              modules: { localIdentName: "[name]_[local]_[hash:base64:5]" }
            }
          },
          {
            loader:
              "/Users/wanba/code/mycode/mvvm/node_modules/postcss-loader/src/index.js",
            options: { sourceMap: false, plugins: [null] }
          }
        ]
      },
      {
        use: [
          {
            loader:
              "/Users/wanba/code/mycode/mvvm/node_modules/vue-style-loader/index.js",
            options: { sourceMap: false, shadowMode: false }
          },
          {
            loader:
              "/Users/wanba/code/mycode/mvvm/node_modules/css-loader/dist/cjs.js",
            options: { sourceMap: false, importLoaders: 2 }
          },
          {
            loader:
              "/Users/wanba/code/mycode/mvvm/node_modules/postcss-loader/src/index.js",
            options: { sourceMap: false, plugins: [null] }
          }
        ]
      }
    ]
  },
  {
    test: {},
    oneOf: [
      {
        resourceQuery: {},
        use: [
          {
            loader:
              "/Users/wanba/code/mycode/mvvm/node_modules/vue-style-loader/index.js",
            options: { sourceMap: false, shadowMode: false }
          },
          {
            loader:
              "/Users/wanba/code/mycode/mvvm/node_modules/css-loader/dist/cjs.js",
            options: {
              sourceMap: false,
              importLoaders: 2,
              modules: { localIdentName: "[name]_[local]_[hash:base64:5]" }
            }
          },
          {
            loader:
              "/Users/wanba/code/mycode/mvvm/node_modules/postcss-loader/src/index.js",
            options: { sourceMap: false, plugins: [null] }
          },
          { loader: "sass-loader", options: { sourceMap: false } }
        ]
      },
      {
        resourceQuery: {},
        use: [
          {
            loader:
              "/Users/wanba/code/mycode/mvvm/node_modules/vue-style-loader/index.js",
            options: { sourceMap: false, shadowMode: false }
          },
          {
            loader:
              "/Users/wanba/code/mycode/mvvm/node_modules/css-loader/dist/cjs.js",
            options: { sourceMap: false, importLoaders: 2 }
          },
          {
            loader:
              "/Users/wanba/code/mycode/mvvm/node_modules/postcss-loader/src/index.js",
            options: { sourceMap: false, plugins: [null] }
          },
          { loader: "sass-loader", options: { sourceMap: false } }
        ]
      },
      {
        test: {},
        use: [
          {
            loader:
              "/Users/wanba/code/mycode/mvvm/node_modules/vue-style-loader/index.js",
            options: { sourceMap: false, shadowMode: false }
          },
          {
            loader:
              "/Users/wanba/code/mycode/mvvm/node_modules/css-loader/dist/cjs.js",
            options: {
              sourceMap: false,
              importLoaders: 2,
              modules: { localIdentName: "[name]_[local]_[hash:base64:5]" }
            }
          },
          {
            loader:
              "/Users/wanba/code/mycode/mvvm/node_modules/postcss-loader/src/index.js",
            options: { sourceMap: false, plugins: [null] }
          },
          { loader: "sass-loader", options: { sourceMap: false } }
        ]
      },
      {
        use: [
          {
            loader:
              "/Users/wanba/code/mycode/mvvm/node_modules/vue-style-loader/index.js",
            options: { sourceMap: false, shadowMode: false }
          },
          {
            loader:
              "/Users/wanba/code/mycode/mvvm/node_modules/css-loader/dist/cjs.js",
            options: { sourceMap: false, importLoaders: 2 }
          },
          {
            loader:
              "/Users/wanba/code/mycode/mvvm/node_modules/postcss-loader/src/index.js",
            options: { sourceMap: false, plugins: [null] }
          },
          { loader: "sass-loader", options: { sourceMap: false } }
        ]
      }
    ]
  },
  {
    test: {},
    oneOf: [
      {
        resourceQuery: {},
        use: [
          {
            loader:
              "/Users/wanba/code/mycode/mvvm/node_modules/vue-style-loader/index.js",
            options: { sourceMap: false, shadowMode: false }
          },
          {
            loader:
              "/Users/wanba/code/mycode/mvvm/node_modules/css-loader/dist/cjs.js",
            options: {
              sourceMap: false,
              importLoaders: 2,
              modules: { localIdentName: "[name]_[local]_[hash:base64:5]" }
            }
          },
          {
            loader:
              "/Users/wanba/code/mycode/mvvm/node_modules/postcss-loader/src/index.js",
            options: { sourceMap: false, plugins: [null] }
          },
          {
            loader: "sass-loader",
            options: { sourceMap: false, sassOptions: { indentedSyntax: true } }
          }
        ]
      },
      {
        resourceQuery: {},
        use: [
          {
            loader:
              "/Users/wanba/code/mycode/mvvm/node_modules/vue-style-loader/index.js",
            options: { sourceMap: false, shadowMode: false }
          },
          {
            loader:
              "/Users/wanba/code/mycode/mvvm/node_modules/css-loader/dist/cjs.js",
            options: { sourceMap: false, importLoaders: 2 }
          },
          {
            loader:
              "/Users/wanba/code/mycode/mvvm/node_modules/postcss-loader/src/index.js",
            options: { sourceMap: false, plugins: [null] }
          },
          {
            loader: "sass-loader",
            options: { sourceMap: false, sassOptions: { indentedSyntax: true } }
          }
        ]
      },
      {
        test: {},
        use: [
          {
            loader:
              "/Users/wanba/code/mycode/mvvm/node_modules/vue-style-loader/index.js",
            options: { sourceMap: false, shadowMode: false }
          },
          {
            loader:
              "/Users/wanba/code/mycode/mvvm/node_modules/css-loader/dist/cjs.js",
            options: {
              sourceMap: false,
              importLoaders: 2,
              modules: { localIdentName: "[name]_[local]_[hash:base64:5]" }
            }
          },
          {
            loader:
              "/Users/wanba/code/mycode/mvvm/node_modules/postcss-loader/src/index.js",
            options: { sourceMap: false, plugins: [null] }
          },
          {
            loader: "sass-loader",
            options: { sourceMap: false, sassOptions: { indentedSyntax: true } }
          }
        ]
      },
      {
        use: [
          {
            loader:
              "/Users/wanba/code/mycode/mvvm/node_modules/vue-style-loader/index.js",
            options: { sourceMap: false, shadowMode: false }
          },
          {
            loader:
              "/Users/wanba/code/mycode/mvvm/node_modules/css-loader/dist/cjs.js",
            options: { sourceMap: false, importLoaders: 2 }
          },
          {
            loader:
              "/Users/wanba/code/mycode/mvvm/node_modules/postcss-loader/src/index.js",
            options: { sourceMap: false, plugins: [null] }
          },
          {
            loader: "sass-loader",
            options: { sourceMap: false, sassOptions: { indentedSyntax: true } }
          }
        ]
      }
    ]
  },
  {
    test: {},
    oneOf: [
      {
        resourceQuery: {},
        use: [
          {
            loader:
              "/Users/wanba/code/mycode/mvvm/node_modules/vue-style-loader/index.js",
            options: { sourceMap: false, shadowMode: false }
          },
          {
            loader:
              "/Users/wanba/code/mycode/mvvm/node_modules/css-loader/dist/cjs.js",
            options: {
              sourceMap: false,
              importLoaders: 2,
              modules: { localIdentName: "[name]_[local]_[hash:base64:5]" }
            }
          },
          {
            loader:
              "/Users/wanba/code/mycode/mvvm/node_modules/postcss-loader/src/index.js",
            options: { sourceMap: false, plugins: [null] }
          },
          {
            loader:
              "/Users/wanba/code/mycode/mvvm/node_modules/less-loader/dist/cjs.js",
            options: { sourceMap: false }
          }
        ]
      },
      {
        resourceQuery: {},
        use: [
          {
            loader:
              "/Users/wanba/code/mycode/mvvm/node_modules/vue-style-loader/index.js",
            options: { sourceMap: false, shadowMode: false }
          },
          {
            loader:
              "/Users/wanba/code/mycode/mvvm/node_modules/css-loader/dist/cjs.js",
            options: { sourceMap: false, importLoaders: 2 }
          },
          {
            loader:
              "/Users/wanba/code/mycode/mvvm/node_modules/postcss-loader/src/index.js",
            options: { sourceMap: false, plugins: [null] }
          },
          {
            loader:
              "/Users/wanba/code/mycode/mvvm/node_modules/less-loader/dist/cjs.js",
            options: { sourceMap: false }
          }
        ]
      },
      {
        test: {},
        use: [
          {
            loader:
              "/Users/wanba/code/mycode/mvvm/node_modules/vue-style-loader/index.js",
            options: { sourceMap: false, shadowMode: false }
          },
          {
            loader:
              "/Users/wanba/code/mycode/mvvm/node_modules/css-loader/dist/cjs.js",
            options: {
              sourceMap: false,
              importLoaders: 2,
              modules: { localIdentName: "[name]_[local]_[hash:base64:5]" }
            }
          },
          {
            loader:
              "/Users/wanba/code/mycode/mvvm/node_modules/postcss-loader/src/index.js",
            options: { sourceMap: false, plugins: [null] }
          },
          {
            loader:
              "/Users/wanba/code/mycode/mvvm/node_modules/less-loader/dist/cjs.js",
            options: { sourceMap: false }
          }
        ]
      },
      {
        use: [
          {
            loader:
              "/Users/wanba/code/mycode/mvvm/node_modules/vue-style-loader/index.js",
            options: { sourceMap: false, shadowMode: false }
          },
          {
            loader:
              "/Users/wanba/code/mycode/mvvm/node_modules/css-loader/dist/cjs.js",
            options: { sourceMap: false, importLoaders: 2 }
          },
          {
            loader:
              "/Users/wanba/code/mycode/mvvm/node_modules/postcss-loader/src/index.js",
            options: { sourceMap: false, plugins: [null] }
          },
          {
            loader:
              "/Users/wanba/code/mycode/mvvm/node_modules/less-loader/dist/cjs.js",
            options: { sourceMap: false }
          }
        ]
      }
    ]
  },
  {
    test: {},
    oneOf: [
      {
        resourceQuery: {},
        use: [
          {
            loader:
              "/Users/wanba/code/mycode/mvvm/node_modules/vue-style-loader/index.js",
            options: { sourceMap: false, shadowMode: false }
          },
          {
            loader:
              "/Users/wanba/code/mycode/mvvm/node_modules/css-loader/dist/cjs.js",
            options: {
              sourceMap: false,
              importLoaders: 2,
              modules: { localIdentName: "[name]_[local]_[hash:base64:5]" }
            }
          },
          {
            loader:
              "/Users/wanba/code/mycode/mvvm/node_modules/postcss-loader/src/index.js",
            options: { sourceMap: false, plugins: [null] }
          },
          {
            loader: "stylus-loader",
            options: { sourceMap: false, preferPathResolver: "webpack" }
          }
        ]
      },
      {
        resourceQuery: {},
        use: [
          {
            loader:
              "/Users/wanba/code/mycode/mvvm/node_modules/vue-style-loader/index.js",
            options: { sourceMap: false, shadowMode: false }
          },
          {
            loader:
              "/Users/wanba/code/mycode/mvvm/node_modules/css-loader/dist/cjs.js",
            options: { sourceMap: false, importLoaders: 2 }
          },
          {
            loader:
              "/Users/wanba/code/mycode/mvvm/node_modules/postcss-loader/src/index.js",
            options: { sourceMap: false, plugins: [null] }
          },
          {
            loader: "stylus-loader",
            options: { sourceMap: false, preferPathResolver: "webpack" }
          }
        ]
      },
      {
        test: {},
        use: [
          {
            loader:
              "/Users/wanba/code/mycode/mvvm/node_modules/vue-style-loader/index.js",
            options: { sourceMap: false, shadowMode: false }
          },
          {
            loader:
              "/Users/wanba/code/mycode/mvvm/node_modules/css-loader/dist/cjs.js",
            options: {
              sourceMap: false,
              importLoaders: 2,
              modules: { localIdentName: "[name]_[local]_[hash:base64:5]" }
            }
          },
          {
            loader:
              "/Users/wanba/code/mycode/mvvm/node_modules/postcss-loader/src/index.js",
            options: { sourceMap: false, plugins: [null] }
          },
          {
            loader: "stylus-loader",
            options: { sourceMap: false, preferPathResolver: "webpack" }
          }
        ]
      },
      {
        use: [
          {
            loader:
              "/Users/wanba/code/mycode/mvvm/node_modules/vue-style-loader/index.js",
            options: { sourceMap: false, shadowMode: false }
          },
          {
            loader:
              "/Users/wanba/code/mycode/mvvm/node_modules/css-loader/dist/cjs.js",
            options: { sourceMap: false, importLoaders: 2 }
          },
          {
            loader:
              "/Users/wanba/code/mycode/mvvm/node_modules/postcss-loader/src/index.js",
            options: { sourceMap: false, plugins: [null] }
          },
          {
            loader: "stylus-loader",
            options: { sourceMap: false, preferPathResolver: "webpack" }
          }
        ]
      }
    ]
  },
  {
    test: {},
    exclude: [null],
    use: [
      {
        loader:
          "/Users/wanba/code/mycode/mvvm/node_modules/cache-loader/dist/cjs.js",
        options: {
          cacheDirectory:
            "/Users/wanba/code/mycode/mvvm/node_modules/.cache/babel-loader",
          cacheIdentifier: "4e30c0ad"
        }
      },
      {
        loader:
          "/Users/wanba/code/mycode/mvvm/node_modules/babel-loader/lib/index.js"
      }
    ]
  },
  {
    enforce: "pre",
    test: {},
    exclude: [
      {},
      "/Users/wanba/code/mycode/mvvm/node_modules/@vue/cli-service/lib"
    ],
    use: [
      {
        loader:
          "/Users/wanba/code/mycode/mvvm/node_modules/eslint-loader/index.js",
        options: {
          extensions: [".js", ".jsx", ".vue"],
          cache: true,
          cacheIdentifier: "4106aa7e",
          emitWarning: false,
          emitError: false,
          eslintPath: "/Users/wanba/code/mycode/mvvm/node_modules/eslint"
        }
      }
    ]
  }
];
