import { Configuration, RuleSetCondition } from 'webpack';

interface Options {
  styleLoaderOptions?: object | false,
  cssLoaderOptions?: object | false,
  sassLoaderOptions?: object | false,
  rule?: RuleSetCondition,
}

declare interface PresetScss {
  extendWebpack: (config?: Configuration, options?: Options) => Configuration;
}

export = PresetScss;
