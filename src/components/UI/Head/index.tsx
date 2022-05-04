import Helmet from 'react-helmet';

const Head: React.FC<{ page: string }> = ({ page }) => { 
    return(
        <Helmet>
            <title>{`Exotic Cars | ${page}`}</title>
        </Helmet>
    );
}

export default Head;