// 模版配置
interface IDetailTemplate {
  url: string;
  downloadUrl: string;
  description: string;
}
interface ITemplatesType {
  vue2: IDetailTemplate;
  vuec: IDetailTemplate;
  vue3: IDetailTemplate;
  react: IDetailTemplate;
  egg: IDetailTemplate;
}

const url = "https://github.com/mamba-kx/custom-cli.git";

const templates: ITemplatesType = {
  egg: {
    url,
    downloadUrl: "github:mamba-kx/custom-cli#egg_template",
    description: "egg模板"
  },
  vue2: {
    url,
    downloadUrl: "github:mamba-kx/custom-cli#vue2_options_template",
    description: "vue2通用模板"
  },
  vuec: {
    url,
    downloadUrl: "github:mamba-kx/custom-cli#vue2_composition_template",
    description: "vue2.7 composition模板"
  },
  vue3: {
    url,
    downloadUrl: "github:mamba-kx/custom-cli#vue3_composition_template",
    description: "vue3 composition模板"
  },
  react: {
    url,
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
    name: "vue2"
  },
  {
    name: "vuec"
  },
  {
    name: "vue3"
  },
  {
    name: "react"
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
