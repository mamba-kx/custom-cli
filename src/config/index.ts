// 模版配置
interface IDetailTemplate {
  url: string;
  downloadUrl: string;
  description: string;
}
interface ITemplatesType {
  Vue2H5: IDetailTemplate;
  Vue2Web: IDetailTemplate;
  Vue3H5: IDetailTemplate;
  Vue3Web: IDetailTemplate;
}

const templates: ITemplatesType = {
  Vue2H5: {
    url: "https://github.com/mamba-kx/custom-cli.git",
    downloadUrl: "http://github.com:mamba-kx/custom-cli#master",
    description: "vue2-h5模板"
  },
  Vue2Web: {
    url: "https://github.com/mamba-kx/vue-cli2.0-h5.git",
    downloadUrl: "http://github.com:mamba-kx/vue-cli2.0-h5#master",
    description: "vue2-web模板"
  },
  Vue3H5: {
    url: "https://github.com/mamba-kx/custom-cli.git",
    downloadUrl: "http://github.com:mamba-kx/custom-cli#master",
    description: "vue3-h5模板"
  },
  Vue3Web: {
    url: "https://github.com/mamba-kx/vue-cli2.0-h5.git",
    downloadUrl: "http://github.com:mamba-kx/vue-cli2.0-h5#master",
    description: "vue3-web模板"
  }
};

// 模板选项
const choices: {
  name: string;
}[] = [
  {
    name: "Vue2H5"
  },
  {
    name: "Vue2Web"
  },
  {
    name: "Vue3H5"
  },
  {
    name: "Vue3Web"
  }
];

// 项目信息
const projectInfo: {
  name: string;
  type: string;
  message: string;
}[] = [
  // {
  //   name: "name",
  //   type: "input",
  //   message: "projectName"
  // },
  {
    name: "desc",
    type: "input",
    message: "projectDesc"
  },
  {
    name: "author",
    type: "input",
    message: "projectAuthor"
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
    message: "Please pick a preset",
    choices
  }
];

export { templates, choices, projectInfo, projectInquirer };
