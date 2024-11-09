import { render, screen } from '@testing-library/react';
import App from '../App';
import Header from './Header.js';
import MucTieu from './MucTieu.js';
import DieuKien from './DieuKien.js';
import ThongDiep from './ThongDiep.js';
import ThietBi from './ThietBi.js';
import GiaiThuong from './GiaiThuong.js';
import ThoiGian from './ThoiGian.js';
import DoiTac from './DoiTac.js';
import QandA from './QandA.js';
import Footer from './Footer.js';


test('renders learn react link in', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders learn react link in', () => {
  render(<Header />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders learn react link in', () => {
  render(<MucTieu />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders learn react link in DieuKien', () => {
  render(<DieuKien />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders learn react link in ThongDiep', () => {
  render(<ThongDiep />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders learn react link in ThietBi', () => {
  render(<ThietBi />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders learn react link in GiaiThuong', () => {
  render(<GiaiThuong />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders learn react link in ThoiGian', () => {
  render(<ThoiGian />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders learn react link in DoiTac', () => {
  render(<DoiTac />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders learn react link in Footer', () => {
  render(<Footer />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders learn react link in Footer', () => {
  render(<QandA />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});