export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <div className="px-4 pb-8">
      <footer className="border-t mt-4 pt-4 max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg border-neutral-300 text-[0.625rem] leading-3">
        © {year} Winnie Corporation. Winnie is provided “as is”, without
        warranty of any kind, express or implied. In no event shall Winnie
        Corporation be liable for any claim, damages or other liability, whether
        in an action of contract, tort or otherwise, arising from, out of or in
        connection with Winnie or the use or other dealings in Winnie.
      </footer>
    </div>
  );
}
