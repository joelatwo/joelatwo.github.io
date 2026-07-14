import { ListNavigationItem, NavigationItem } from "./types";

// Base Paths
export const HomePath: NavigationItem = { path: "/", name: "Home" };
export const ProjectsPath: NavigationItem = {
  path: "/projects",
  name: "Projects",
};

// Projects
export const FormBuilderPath: NavigationItem = {
  path: "/projects/formBuilder",
  name: "Form Builder",
};
export const SelincPath: NavigationItem = {
  path: "/projects/selinc",
  name: "Selinc",
};
export const CICDPath: NavigationItem = {
  path: "/projects/cicd",
  name: "Continuous Integration/Deployment",
};
export const AtomicDesignPath: NavigationItem = {
  path: "projects/atomicDesign",
  name: "Atomic Design System and Component Library",
};
export const CompilerPath: NavigationItem = {
  path: "/projects/compiler",
  name: "Compiler",
};
export const DeviceManager: NavigationItem = {
  path: "/projects/deviceManager",
  name: "Device Manager",
};
export const DrupalWebsite: NavigationItem = {
  path: "/projects/drupal",
  name: "Drupal Website",
};
export const SchedulingApp: NavigationItem = {
  path: "/projects/schedulingApp",
  name: "Scheduling",
};

// Collection of all paths for navigation
const ProjectList: ListNavigationItem = {
  paths: [
    FormBuilderPath,
    SelincPath,
    CICDPath,
    DeviceManager,
    AtomicDesignPath,
    CompilerPath,
    DrupalWebsite,
    SchedulingApp,
  ],
  title: "Projects",
  parentPath: ProjectsPath,
};

export default [HomePath, ProjectList];
