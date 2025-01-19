export interface PostProps {
  objects: ObjectsPost[];
}

interface ObjectsPost {
  slug: string;
  title: string;
  metadata: {
    banner: {
      url: string;
    };
    button: {
      title: string;
      url: string;
    };
    description: {
      title: string;
      text: string;
      banner: {
        url: string;
      };
    };
    button_active: boolean;
    button_title: string;
    button_url: string;
  };
}
