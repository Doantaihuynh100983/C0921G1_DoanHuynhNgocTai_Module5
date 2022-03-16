import {SanPham} from './SanPham';

export interface LoHang {
  id?: number;
  maLoHang?: string;
  soLuong?: number;
  ngayNhapHang?: string;
  ngaySanXuat?: string;
  ngayHetHan?: string;
  sanPham?: SanPham;
}
