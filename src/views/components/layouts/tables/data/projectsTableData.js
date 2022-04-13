import Icon from '@mui/material/Icon';
import logoGithub from 'src/assets/images/small-logos/github.svg';
import LogoAsana from 'src/assets/images/small-logos/logo-asana.svg';
import logoAtlassian from 'src/assets/images/small-logos/logo-atlassian.svg';
import logoInvesion from 'src/assets/images/small-logos/logo-invision.svg';
import logoSlack from 'src/assets/images/small-logos/logo-slack.svg';
import logoSpotify from 'src/assets/images/small-logos/logo-spotify.svg';
import MDAvatar from 'src/views/components/MDAvatar';
import MDBox from 'src/views/components/MDBox';
import MDProgress from 'src/views/components/MDProgress';
import MDTypography from 'src/views/components/MDTypography';

export default function projectsTableData() {
    // eslint-disable-next-line react/prop-types
    const Project = ({ image, name }) => (
        <MDBox display="flex" alignItems="center" lineHeight={1}>
            <MDAvatar src={image} name={name} size="sm" variant="rounded" />
            <MDTypography
                display="block"
                variant="button"
                fontWeight="medium"
                ml={1}
                lineHeight={1}
            >
                {name}
            </MDTypography>
        </MDBox>
    );

    // eslint-disable-next-line react/prop-types
    const Progress = ({ color, value }) => (
        <MDBox display="flex" alignItems="center">
            <MDTypography variant="caption" color="text" fontWeight="medium">
                {value}%
            </MDTypography>
            <MDBox ml={0.5} width="9rem">
                <MDProgress variant="gradient" color={color} value={value} />
            </MDBox>
        </MDBox>
    );

    return {
        columns: [
            {
                Header: 'project',
                accessor: 'project',
                width: '30%',
                align: 'left',
            },
            { Header: 'budget', accessor: 'budget', align: 'left' },
            { Header: 'status', accessor: 'status', align: 'center' },
            { Header: 'completion', accessor: 'completion', align: 'center' },
            { Header: 'action', accessor: 'action', align: 'center' },
        ],

        rows: [
            {
                project: <Project image={LogoAsana} name="Asana" />,
                budget: (
                    <MDTypography
                        component="a"
                        href="#"
                        variant="button"
                        color="text"
                        fontWeight="medium"
                    >
                        $2,500
                    </MDTypography>
                ),
                status: (
                    <MDTypography
                        component="a"
                        href="#"
                        variant="caption"
                        color="text"
                        fontWeight="medium"
                    >
                        working
                    </MDTypography>
                ),
                completion: <Progress color="info" value={60} />,
                action: (
                    <MDTypography component="a" href="#" color="text">
                        <Icon>more_vert</Icon>
                    </MDTypography>
                ),
            },
            {
                project: <Project image={logoGithub} name="Github" />,
                budget: (
                    <MDTypography
                        component="a"
                        href="#"
                        variant="button"
                        color="text"
                        fontWeight="medium"
                    >
                        $5,000
                    </MDTypography>
                ),
                status: (
                    <MDTypography
                        component="a"
                        href="#"
                        variant="caption"
                        color="text"
                        fontWeight="medium"
                    >
                        done
                    </MDTypography>
                ),
                completion: <Progress color="success" value={100} />,
                action: (
                    <MDTypography component="a" href="#" color="text">
                        <Icon>more_vert</Icon>
                    </MDTypography>
                ),
            },
            {
                project: <Project image={logoAtlassian} name="Atlassian" />,
                budget: (
                    <MDTypography
                        component="a"
                        href="#"
                        variant="button"
                        color="text"
                        fontWeight="medium"
                    >
                        $3,400
                    </MDTypography>
                ),
                status: (
                    <MDTypography
                        component="a"
                        href="#"
                        variant="caption"
                        color="text"
                        fontWeight="medium"
                    >
                        canceled
                    </MDTypography>
                ),
                completion: <Progress color="error" value={30} />,
                action: (
                    <MDTypography component="a" href="#" color="text">
                        <Icon>more_vert</Icon>
                    </MDTypography>
                ),
            },
            {
                project: <Project image={logoSpotify} name="Spotify" />,
                budget: (
                    <MDTypography
                        component="a"
                        href="#"
                        variant="button"
                        color="text"
                        fontWeight="medium"
                    >
                        $14,000
                    </MDTypography>
                ),
                status: (
                    <MDTypography
                        component="a"
                        href="#"
                        variant="caption"
                        color="text"
                        fontWeight="medium"
                    >
                        working
                    </MDTypography>
                ),
                completion: <Progress color="info" value={80} />,
                action: (
                    <MDTypography component="a" href="#" color="text">
                        <Icon>more_vert</Icon>
                    </MDTypography>
                ),
            },
            {
                project: <Project image={logoSlack} name="Slack" />,
                budget: (
                    <MDTypography
                        component="a"
                        href="#"
                        variant="button"
                        color="text"
                        fontWeight="medium"
                    >
                        $1,000
                    </MDTypography>
                ),
                status: (
                    <MDTypography
                        component="a"
                        href="#"
                        variant="caption"
                        color="text"
                        fontWeight="medium"
                    >
                        canceled
                    </MDTypography>
                ),
                completion: <Progress color="error" value={0} />,
                action: (
                    <MDTypography component="a" href="#" color="text">
                        <Icon>more_vert</Icon>
                    </MDTypography>
                ),
            },
            {
                project: <Project image={logoInvesion} name="Invesion" />,
                budget: (
                    <MDTypography
                        component="a"
                        href="#"
                        variant="button"
                        color="text"
                        fontWeight="medium"
                    >
                        $2,300
                    </MDTypography>
                ),
                status: (
                    <MDTypography
                        component="a"
                        href="#"
                        variant="caption"
                        color="text"
                        fontWeight="medium"
                    >
                        done
                    </MDTypography>
                ),
                completion: <Progress color="success" value={100} />,
                action: (
                    <MDTypography component="a" href="#" color="text">
                        <Icon>more_vert</Icon>
                    </MDTypography>
                ),
            },
        ],
    };
}
