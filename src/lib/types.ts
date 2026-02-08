export interface MenuItem {
  id: number;
  name: string;
  price: number;
}

export interface GalleryImage {
  src: string;
  category: string;
  title: string;
}

export interface Milestone {
  year: string;
  event: string;
  desc: string;
}

export interface MenuCategory {
  name: string;
  items: MenuItem[];
}

export interface SetPackageItem {
  name: string;
  price: number;
  description: string;
}

export interface BuffetItem {
  name: string;
  price: number;
  description: string;
}

export interface HallConfiguration {
  banquet: number;
  cabinet: number;
  hollow_square: number;
  theater: number;
  classroom: number;
  boardroom: number;
  u_shape: number;
  t_shape: number;
  i_shape: number;
  l_shape: number;
}

export interface SubHall {
  name: string;
  size_sqft: number;
  floor_height: number | null;
  capacity: number;
  configurations: HallConfiguration;
}

export interface Hall {
  name: string;
  image?: string;
  size_sqft?: number;
  capacity?: number;
  capacity_range?: string;
  location?: string;
  description?: string;
  floor_height?: number | null;
  configurations?: HallConfiguration;
  halls?: SubHall[];
}

export interface SiteData {
  site: {
    name: string;
    navigation: string[];
    contact: {
      phone: string[];
      email: string;
      address: string;
    };
    business_hours: string;
    assets: {
      logo: {
        url: string;
        width: number;
        height: number;
      };
      hero_bg: string;
      wedding_img: string;
      catering_img: string;
      history_img: string;
    };
    apps?: {
      foodbite: {
        name: string;
        android: string;
        ios: string;
      };
    };
  };
  about: {
    timeline: Milestone[];
    pillars: {
      title: string;
      desc: string;
      icon: string;
      color: string;
    }[];
  };
  gallery: GalleryImage[];
  halls: Hall[];
  menu: {
    a_la_carte_menu: {
      categories: MenuCategory[];
    };
    set_menu: {
      [key: string]: SetPackageItem[];
    };
    buffet_menu: BuffetItem[];
  };
  social_links: {
    platform: string;
    url: string;
    label: string;
  }[];
  legacy_section: {
    title: string;
    subtitle: string;
    stats: { value: string; label: string };
    content: string[];
    trade_license: string;
    image: string;
  };
  footer: {
    portfolio: { name: string; href: string }[];
    delivery_partners: string[];
    payment_gateway_img: string;
  };
}

export type ViewState = 'Home' | 'About Us' | 'Menu' | 'Halls' | 'Gallery' | 'Contact Us' | 'Book Hall';
