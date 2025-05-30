export interface DeviceModel {
  id: string;
  name: string;
  isCompatible: boolean;
}

export interface DeviceSeries {
  id: string;
  name: string;
  models: DeviceModel[] | string;
}

export interface DeviceBrand {
  id: string;
  name: string;
  icon?: string;
  series: DeviceSeries[];
  title?: string;
  subtitle?: string;
  expanded?: boolean;
}

export interface DevicesCompatibleProps {
  brands: DeviceBrand[];
  title?: string;
  subtitle?: string;
  onToggle: (id: number) => void;
}

export interface BrandCardProps {
  brand: DeviceBrand;
  isExpanded: boolean;
}
