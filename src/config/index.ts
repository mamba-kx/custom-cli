// 模版配置
interface IDetailTemplate {
  url: string;
  downloadUrl: string;
  description: string;
}
interface ITemplatesType {
  Vue2H5: IDetailTemplate;
  Vue3H5: IDetailTemplate;
  ReactCli: IDetailTemplate;
  egg: IDetailTemplate;
}

const templates: ITemplatesType = {
  egg: {
    url: "https://github.com/mamba-kx/custom-cli.git",
    downloadUrl: "github:mamba-kx/custom-cli#egg_template",
    description: "egg模板"
  },
  Vue2H5: {
    url: "https://github.com/mamba-kx/custom-cli.git",
    downloadUrl: "github:mamba-kx/custom-cli#vue2_composition_template",
    description: "vue2_composition模板"
  },
  Vue3H5: {
    url: "https://github.com/mamba-kx/custom-cli.git",
    downloadUrl: "github:mamba-kx/custom-cli#vue3_composition_template",
    description: "vue3_composition模板"
  },
  ReactCli: {
    url: "https://github.com/mamba-kx/custom-cli.git",
    downloadUrl: "github:mamba-kx/custom-cli#react_cli_template",
    description: "react_cli模板"
  }
};

// 模板选项
const choices: {
  name: string;
}[] = [
  {
    name: "egg"
  },
  {
    name: "Vue2H5"
  },
  {
    name: "Vue3H5"
  },
  {
    name: "ReactCli"
  }
];

// 项目信息
const projectInfo: {
  name: string;
  type: string;
  message: string;
}[] = [
  {
    name: "desc",
    type: "input",
    message: "description"
  },
  {
    name: "author",
    type: "input",
    message: "author"
  }
];

const projectInquirer: {
  name: string;
  type: string;
  message: string;
  choices: any;
}[] = [
  {
    name: "preset",
    type: "list",
    message: "Please pick a preset:",
    choices
  }
];

export { templates, choices, projectInfo, projectInquirer };
