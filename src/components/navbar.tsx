import { useState } from "react";

type NavItem = { label: string; href: string };

type NavGroup = { title: string; items: NavItem[] };

type MenuItem = {
  label: string;
  href?: string;
  children?: NavItem[];
  groups?: NavGroup[];
};

const menuItems: MenuItem[] = [
  { label: "หน้าหลัก", href: "home" },
  {
    label: "เกี่ยวกับเรา",
    children: [
      { label: "ประวัติความเป็นมา", href: "/about/history" },
      { label: "พันธกิจและวิสัยทัศน์", href: "/about/mission" },
      { label: "ผู้บริหาร", href: "/about/executives" },
      { label: "โครงสร้างศูนย์", href: "/about/structure" },
    ],
  },
  {
    label: "บริการของเรา",
    groups: [
      {
        title: "คลินิคพิเศษ",
        items: [
          { label: "คลินิกโรคผิวหนัง", href: "/services/dermatology" },
          { label: "คลินิกโรคตา", href: "/services/ophthalmology" },
          { label: "คลินิกช่องปากและทันตกรรม", href: "/services/dentistry" },
          { label: "คลินิกกระดูกและข้อต่อ", href: "/services/orthopedics" },
          { label: "คลินิกหัวใจและหลอดเลือด", href: "/services/cardiology" },
          { label: "คลินิกระบบประสาทและสมอง", href: "/services/neurology" },
          { label: "คลินิกโรคแมว", href: "/services/feline" },
          { label: "คลินิกโรคเนื้องอก", href: "/services/oncology" },
          { label: "คลินิกกายภาพบำบัด", href: "/services/physiotherapy" },
          {
            label: "คลินิกฮอร์โมนและต่อมไร้ท่อ",
            href: "/services/endocrinology",
          },
          {
            label: "คลินิกระบบทางเดินอาหาร",
            href: "/services/gastroenterology",
          },
          { label: "คลินิกโรคไต", href: "/services/nephrology" },
          { label: "คลินิกฝังเข็ม", href: "/services/acupuncture" },
          { label: "คลินิกสัตว์เลี้ยงชนิดพิเศษ", href: "/services/exotic" },
          { label: "คลินิกสัตว์น้ำ", href: "/services/aquatic" },
        ],
      },
      {
        title: "ศัลยกรรม",
        items: [
          {
            label: "ศัลยกรรมเนื้อเยื่ออ่อน",
            href: "/services/soft-tissue-surgery",
          },
          { label: "ศัลยกรรมกระดูก", href: "/services/orthopedic-surgery" },
          { label: "วิสัญญี", href: "/services/anesthesiology" },
          { label: "ทันตกรรมและช่องปาก", href: "/services/dental-surgery" },
          { label: "ส่องกล้องตรวจ", href: "/services/endoscopy" },
        ],
      },
      {
        title: "หน่วยทัศนวินิจฉัย",
        items: [
          { label: "ศูนย์อัลตร้าซาวน์", href: "/services/ultrasound" },
          { label: "X-Ray", href: "/services/x-ray" },
          { label: "CT Scan", href: "/services/ct-scan" },
        ],
      },
      {
        title: "อื่นๆ",
        items: [
          {
            label: "ห้องปฏิบัติการโลหิตวิทยา",
            href: "/services/hematology-lab",
          },
          { label: "หออภิบาลสัตว์ป่วย", href: "/services/icu" },
          { label: "หน่วยฉุกเฉิน", href: "/services/emergency" },
          { label: "อายุรกรรมทั่วไป", href: "/services/internal-medicine" },
        ],
      },
    ],
  },
  {
    label: "ข่าวประกาศ",
    children: [
      { label: "ข่าวประชาสัมพันธ", href: "/news/announcements" },
      { label: "ความรู้เกี่ยวกับสัตวเลี้ยง", href: "/news/pet-knowledge" },
    ],
  },
  {
    label: "ติดต่อเรา",
    children: [
      { label: "ติดต่อเรา", href: "" },
      { label: "นโยบายความเป็นส่วนตัว", href: "/privacy-policy" },
      {
        label: "เว็บไซต์คณะสัตวแพทยศาสตร์ มช.",
        href: "https://www.vet.cmu.ac.th/",
      },
    ],
  },
];

const socialItems: NavItem[] = [
  { label: "facebook", href: "https://www.facebook.com/NOVEL.VMCMU/" },
  { label: "line", href: "https://line.me/" },
];

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  return (
    <>
      <nav className="navbar">
        <ul className="nav-menu">
          {menuItems.map((item) => {
            const isOpen = openMenu === item.label;

            return (
              <li key={item.label}>
                {item.href ? (
                  <a href={item.href}>{item.label}</a>
                ) : (
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    onClick={() => setOpenMenu(isOpen ? null : item.label)}
                  >
                    {item.label}
                  </button>
                )}

                {isOpen && item.children && (
                  <ul>
                    {item.children.map((link) => (
                      <li key={link.href}>
                        <a href={link.href}>{link.label}</a>
                      </li>
                    ))}
                  </ul>
                )}

                {isOpen && item.groups && (
                  <div>
                    {item.groups.map((group) => (
                      <div key={group.title}>
                        <h3>{group.title}</h3>
                        <ul>
                          {group.items.map((link) => (
                            <li key={link.href}>
                              <a href={link.href}>{link.label}</a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                )}
              </li>
            );
          })}
        </ul>
        {socialItems.map((item) => (
          <li key={item.href}>
            <a href={item.href} target="_blank" rel="noreferrer">
              {item.label}
            </a>
          </li>
        ))}
      </nav>
    </>
  );
}
