// eslint-disable-next-line react/prop-types
const BannerLottie = ({ src }) => {
    return (
        <lottie-player
            src={src}
            background="transparent"
            style={{ width: '100%', height: '100%' }}
            speed="1"
            loop
            autoplay
        />
    );
};

export default BannerLottie;
