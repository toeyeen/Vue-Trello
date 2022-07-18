type ID = string;

export interface Resource8base {
  id: ID;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;
}

export interface User extends Resource8base {
  email: string;
  roles: { items: Role[] };
}
export interface Role {
  name: string;
}

export interface Board extends Resource8base {
  title: string;

  // Board order JSON encoded in DB and thus can be a string
  // when decoded it's an array of Columns
  order: string | Column[];

  // relationships
  image?: Partial<File>;
  color?: string;
  tasks?: Partial<Task>[];
}

export interface Column {
  id: ID;
  title: string;
  taskIds: ID[];
}

export interface Task extends Resource8base {
  title: string;
  description: string;
  labels: Label[];
  dueAt: Date;

  // relationships
  board?: Partial<Board>;
  comments?: Partial<Comment>[];
}

export interface Comment extends Resource8base {
  message: string;

  // relationships
  task?: Partial<Task>;
}

type LabelColor =
  | "red"
  | "orange"
  | "yellow"
  | "green"
  | "blue"
  | "purple"
  | "pink";

export interface Label extends Resource8base {
  label: string;
  color: LabelColor;

  // relationships
  board?: Partial<Board>;
  tasks?: Partial<Task>[];
}

export interface File extends Resource8base {
  downloadStorageUrl: string;
  downloadUrl: string;
  filename: string;
  meta: {
    path: string;
    size: number;
    mimetype: string;
    workspaceId: string;
  };
  previewUrl: string;
  provider: string;
  public: boolean;
  shareUrl: string;
  uploadUrl: string;
  uploaded: boolean;
}

export interface DrawerList {
  text: string;
  icon: string;
  selected: boolean;
  data: {
    path?: string;
    action?: () => void;
  };
}

export type AlertStyle = "error" | "success" | "warning" | "info" | "none";

export interface AlertOptions {
  html?: boolean;
  closable?: boolean;
  timeout?: number | false;
  style?: AlertStyle;
}

export interface Alert extends AlertOptions {
  id: string;
  message: string;
}
export interface Colors {
  id: string | number;
  color: string;
  type?: string;
}

export interface CardTask {
  id: number;
  name: string;
}
export interface CardItem {
  id: string | number;
  name: string;
  order: string;
  tasks: Required<CardTask>[];
  type: string;
  mouseEntered: boolean;
}
