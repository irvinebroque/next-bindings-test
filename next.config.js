/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = nextConfig

// Everything below *needs* to be part of the default template that running npm create cloudflare@latest gives you
// It needs to be documented in real dev docs
// It needs to be the happy path, not optional thing you discover later
// Assume that every single developer will use one or more of these in their app
if (process.env.NODE_ENV === 'development') {
    import('@cloudflare/next-on-pages/__experimental__next-dev').then(({ setupDevBindings }) => {

        // When Pages has wrangler.toml, just read from that in current directory and can skip this config
        setupDevBindings({
            ai: {
                bindingName: 'AI',
            },
            kvNamespaces: ['MY_KV_1', 'MY_KV_2'],
        });
    });
}