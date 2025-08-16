export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-4 mt-8">
      <div className="container mx-auto text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Kalph. All rights reserved.
        </p>
        <p className="text-xs mt-2">Made with ❤️ by the Kalph </p>
      </div>
    </footer>
  );
};
