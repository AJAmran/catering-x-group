import { ImageResponse } from 'next/og';

export const runtime = 'edge';

// Image metadata
export const alt = 'X-Group Catering & Convention';
export const size = {
    width: 1200,
    height: 630,
};

export const contentType = 'image/png';

export default async function Image() {
    // We can fetch custom fonts here if needed, but for reliability and speed
    // we'll use system fonts with careful styling.

    const siteName = "X-Group Catering";
    const title = "Taste the Artistry of Hospitality";
    const subtitle = "Dhaka's premier event management & catering services since 1992.";

    return new ImageResponse(
        (
            <div
                style={{
                    height: '100%',
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: '#0f172a', // dark background
                    position: 'relative',
                }}
            >
                {/* Background Image with Layer */}
                <img
                    src="https://ik.imagekit.io/4iqsux69yt/RGF06525.jpg?updatedAt=1769074425651"
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        opacity: 0.4,
                    }}
                    alt="Background"
                />

                {/* Gradient Overlay for Readability */}
                <div
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        background: 'linear-gradient(to bottom, rgba(15, 23, 42, 0.3), rgba(15, 23, 42, 0.9))',
                    }}
                />

                {/* Frame/Border Decoration */}
                <div
                    style={{
                        position: 'absolute',
                        top: 40,
                        left: 40,
                        right: 40,
                        bottom: 40,
                        border: '2px solid rgba(255,255,255,0.1)',
                        borderRadius: 24,
                    }}
                />

                {/* Content Container */}
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        zIndex: 10,
                        padding: '0 80px',
                        textAlign: 'center',
                    }}
                >
                    {/* Brand Pill */}
                    <div
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            backgroundColor: 'rgba(255, 255, 255, 0.1)',
                            padding: '12px 24px',
                            borderRadius: 50,
                            border: '1px solid rgba(255, 255, 255, 0.2)',
                            marginBottom: 40,
                        }}
                    >
                        <div
                            style={{
                                width: 12,
                                height: 12,
                                borderRadius: '50%',
                                backgroundColor: '#c41e3a', // catering red
                                marginRight: 12,
                            }}
                        />
                        <span
                            style={{
                                color: 'white',
                                fontSize: 20,
                                letterSpacing: '0.1em',
                                textTransform: 'uppercase',
                                fontWeight: 600,
                            }}
                        >
                            {siteName}
                        </span>
                    </div>

                    {/* Main Title */}
                    <div
                        style={{
                            fontSize: 80,
                            fontWeight: 900,

                            lineHeight: 1.1,
                            marginBottom: 24,
                            textShadow: '0 10px 30px rgba(0,0,0,0.5)',
                            background: 'linear-gradient(to bottom right, #fff, #cbd5e1)',
                            backgroundClip: 'text',
                            color: 'transparent',
                        }}
                    >
                        {title}
                    </div>

                    {/* Subtitle */}
                    <div
                        style={{
                            fontSize: 32,
                            color: '#94a3b8',
                            lineHeight: 1.5,
                            fontWeight: 400,
                            maxWidth: 800,
                        }}
                    >
                        {subtitle}
                    </div>
                </div>

                {/* Floating URL at bottom */}
                <div
                    style={{
                        position: 'absolute',
                        bottom: 60,
                        fontSize: 24,
                        color: '#64748b',
                        letterSpacing: '0.05em',
                    }}
                >
                    x-group-catering.com
                </div>
            </div>
        ),
        {
            ...size,
        }
    );
}
