import { ListNavigationItem, NavigationItem } from "./types";

// Base Paths
export const HomePath: NavigationItem = { href: "/", name: "Home" };
export const ProjectsPath: NavigationItem = {
  href: "/projects",
  name: "Projects",
};

// Projects
export const FormBuilderPath: NavigationItem = {
  href: "/projects/formBuilder",
  name: "Form Builder",
};
export const SelincPath: NavigationItem = {
  href: "/projects/selinc",
  name: "Selinc",
};
export const CICDPath: NavigationItem = {
  href: "/projects/cicd",
  name: "Continuous Integration/Deployment",
};
export const AtomicDesignPath: NavigationItem = {
  href: "projects/atomicDesign",
  name: "Atomic Design System and Component Library",
};
export const CompilerPath: NavigationItem = {
  href: "/projects/compiler",
  name: "Compiler",
};
export const DeviceManager: NavigationItem = {
  href: "/projects/deviceManager",
  name: "Device Manager",
};
export const DrupalWebsite: NavigationItem = {
  href: "/projects/drupal",
  name: "Drupal Website",
};
export const SchedulingApp: NavigationItem = {
  href: "/projects/schedulingApp",
  name: "Scheduling App",
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
