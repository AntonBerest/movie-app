export default function Footer() {
    return (
        <div className="px-16 py-12 bg-zinc-900 border-t border-zinc-800">

            <div className="grid grid-cols-6 gap-8">
                <div>
                    <h3 className="text-white font-bold mb-4">Home</h3>
                    <div className="flex flex-col gap-2">
                        <button className="text-zinc-400 text-left">Categories</button>
                        <button className="text-zinc-400 text-left">Devices</button>
                        <button className="text-zinc-400 text-left">Pricing</button>
                    </div>
                </div>
                <div>
                    <h3 className="text-white font-bold mb-4">Movies</h3>
                    <div className="flex flex-col gap-2">
                        <button className="text-zinc-400 text-left">Genres</button>
                        <button className="text-zinc-400 text-left">Trending</button>
                        <button className="text-zinc-400 text-left">New Release</button>
                        <button className="text-zinc-400 text-left">Popular</button>
                    </div>
                </div>
                <div>
                    <h3 className="text-white font-bold mb-4">Shows</h3>
                    <div className="flex flex-col gap-2">
                        <button className="text-zinc-400 text-left">Genres</button>
                        <button className="text-zinc-400 text-left">Trending</button>
                        <button className="text-zinc-400 text-left">New Release</button>
                        <button className="text-zinc-400 text-left">Popular</button>
                    </div>
                </div>
                <div>
                    <h3 className="text-white font-bold mb-4">Support</h3>
                    <div className="flex flex-col gap-2">
                        <button className="text-zinc-400 text-left">Contact Us</button>
                    </div>
                </div>
                <div>
                    <h3 className="text-white font-bold mb-4">Subscription</h3>
                    <div className="flex flex-col gap-2">
                        <button className="text-zinc-400 text-left">Plans</button>
                        <button className="text-zinc-400 text-left">Features</button>
                    </div>
                </div>
                <div>
                    <h3 className="text-white font-bold mb-4">Connect With Us</h3>
                    <div className="flex gap-4">
                        <a href="https://twitter.com" target="_blank" className="text-zinc-400 hover:text-white text-sm">Twitter</a>
                        <a href="https://facebook.com" target="_blank" className="text-zinc-400 hover:text-white text-sm">Facebook</a>
                        <a href="https://linkedin.com" target="_blank" className="text-zinc-400 hover:text-white text-sm">LinkedIn</a>
                    </div>
                </div>
            </div>

            <hr className="border-zinc-800 my-6" />
            <p className="text-zinc-500 text-sm">©2023 StreamVibe. All Rights Reserved.</p>

        </div>
    )
}