import { motion } from 'framer-motion';
import DiscoverGrovery from './DiscoverGrovery';
import DiscoverHostel from './DiscoverHostel';
import DiscoverProduct from './DiscoverProduct';

const Discover = () => {
    return (
        <motion.div
            initial={{ width: 0 }}
            animate={{ width: '100%', transition: { duration: 0.4 } }}
            exit={{ x: window.innerWidth, transition: { duration: 0.05 } }}
        >
            <DiscoverHostel />
            <DiscoverProduct />
            <DiscoverGrovery />
        </motion.div>
    );
};

export default Discover;
