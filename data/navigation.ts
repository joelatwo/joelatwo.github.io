import { ListNavigationItem, NavigationItem } from "./types";

// Base Paths
const HomePath: NavigationItem = { path: "/", name: "Home" };
const ProjectsPath: NavigationItem = { path: "/projects", name: "Projects" };

// Projects
const FormBuilderPath: NavigationItem = {
  path: "/projects/formBuilder",
  name: "Form Builder",
};
const SelincPath: NavigationItem = { path: "/projects/selinc", name: "Selinc" };
const CICDPath: NavigationItem = {
  path: "/projects/cicd",
  name: "Continuous Integration/Deployment",
};
const CompilerPath: NavigationItem = {
  path: "/projects/compiler",
  name: "Compiler",
};

// Collection of all paths for navigation
const ProjectList: ListNavigationItem = {
  paths: [FormBuilderPath, SelincPath, CICDPath, CompilerPath],
  title: "Projects",
  parentPath: ProjectsPath,
};

export default [HomePath, ProjectList];
