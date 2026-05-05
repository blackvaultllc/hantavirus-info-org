export function AdBanner({ className }: { className?: string }) {
  return (
    <div className={className}>
      <div className="bg-gray-100 border border-gray-200 rounded-lg p-4 text-center text-sm text-gray-500">
        <p>Advertisement Space</p>
        <p className="text-xs mt-1">Google AdSense Placeholder</p>
      </div>
    </div>
  );
}
