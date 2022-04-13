// Images
import team2 from 'src/assets/images/team-2.jpg';
import team3 from 'src/assets/images/team-3.jpg';
import team4 from 'src/assets/images/team-4.jpg';
import MDAvatar from 'src/views/components/MDAvatar';
import MDBadge from 'src/views/components/MDBadge';
import MDBox from 'src/views/components/MDBox';
import MDTypography from 'src/views/components/MDTypography';

export default function authorsTableData() {
    // eslint-disable-next-line react/prop-types
    const Author = ({ image, name, email }) => (
        <MDBox display="flex" alignItems="center" lineHeight={1}>
            <MDAvatar src={image} name={name} size="sm" />
            <MDBox ml={2} lineHeight={1}>
                <MDTypography
                    display="block"
                    variant="button"
                    fontWeight="medium"
                >
                    {name}
                </MDTypography>
                <MDTypography variant="caption">{email}</MDTypography>
            </MDBox>
        </MDBox>
    );

    // eslint-disable-next-line react/prop-types
    const Job = ({ title, description }) => (
        <MDBox lineHeight={1} textAlign="left">
            <MDTypography
                display="block"
                variant="caption"
                color="text"
                fontWeight="medium"
            >
                {title}
            </MDTypography>
            <MDTypography variant="caption">{description}</MDTypography>
        </MDBox>
    );

    return {
        columns: [
            {
                Header: 'author',
                accessor: 'author',
                width: '45%',
                align: 'left',
            },
            { Header: 'function', accessor: 'function', align: 'left' },
            { Header: 'status', accessor: 'status', align: 'center' },
            { Header: 'employed', accessor: 'employed', align: 'center' },
            { Header: 'action', accessor: 'action', align: 'center' },
        ],

        rows: [
            {
                author: (
                    <Author
                        image={team2}
                        name="John Michael"
                        email="john@creative-tim.com"
                    />
                ),
                function: <Job title="Manager" description="Organization" />,
                status: (
                    <MDBox ml={-1}>
                        <MDBadge
                            badgeContent="online"
                            color="success"
                            variant="gradient"
                            size="sm"
                        />
                    </MDBox>
                ),
                employed: (
                    <MDTypography
                        component="a"
                        href="#"
                        variant="caption"
                        color="text"
                        fontWeight="medium"
                    >
                        23/04/18
                    </MDTypography>
                ),
                action: (
                    <MDTypography
                        component="a"
                        href="#"
                        variant="caption"
                        color="text"
                        fontWeight="medium"
                    >
                        Edit
                    </MDTypography>
                ),
            },
            {
                author: (
                    <Author
                        image={team3}
                        name="Alexa Liras"
                        email="alexa@creative-tim.com"
                    />
                ),
                function: <Job title="Programator" description="Developer" />,
                status: (
                    <MDBox ml={-1}>
                        <MDBadge
                            badgeContent="offline"
                            color="dark"
                            variant="gradient"
                            size="sm"
                        />
                    </MDBox>
                ),
                employed: (
                    <MDTypography
                        component="a"
                        href="#"
                        variant="caption"
                        color="text"
                        fontWeight="medium"
                    >
                        11/01/19
                    </MDTypography>
                ),
                action: (
                    <MDTypography
                        component="a"
                        href="#"
                        variant="caption"
                        color="text"
                        fontWeight="medium"
                    >
                        Edit
                    </MDTypography>
                ),
            },
            {
                author: (
                    <Author
                        image={team4}
                        name="Laurent Perrier"
                        email="laurent@creative-tim.com"
                    />
                ),
                function: <Job title="Executive" description="Projects" />,
                status: (
                    <MDBox ml={-1}>
                        <MDBadge
                            badgeContent="online"
                            color="success"
                            variant="gradient"
                            size="sm"
                        />
                    </MDBox>
                ),
                employed: (
                    <MDTypography
                        component="a"
                        href="#"
                        variant="caption"
                        color="text"
                        fontWeight="medium"
                    >
                        19/09/17
                    </MDTypography>
                ),
                action: (
                    <MDTypography
                        component="a"
                        href="#"
                        variant="caption"
                        color="text"
                        fontWeight="medium"
                    >
                        Edit
                    </MDTypography>
                ),
            },
            {
                author: (
                    <Author
                        image={team3}
                        name="Michael Levi"
                        email="michael@creative-tim.com"
                    />
                ),
                function: <Job title="Programator" description="Developer" />,
                status: (
                    <MDBox ml={-1}>
                        <MDBadge
                            badgeContent="online"
                            color="success"
                            variant="gradient"
                            size="sm"
                        />
                    </MDBox>
                ),
                employed: (
                    <MDTypography
                        component="a"
                        href="#"
                        variant="caption"
                        color="text"
                        fontWeight="medium"
                    >
                        24/12/08
                    </MDTypography>
                ),
                action: (
                    <MDTypography
                        component="a"
                        href="#"
                        variant="caption"
                        color="text"
                        fontWeight="medium"
                    >
                        Edit
                    </MDTypography>
                ),
            },
            {
                author: (
                    <Author
                        image={team3}
                        name="Richard Gran"
                        email="richard@creative-tim.com"
                    />
                ),
                function: <Job title="Manager" description="Executive" />,
                status: (
                    <MDBox ml={-1}>
                        <MDBadge
                            badgeContent="offline"
                            color="dark"
                            variant="gradient"
                            size="sm"
                        />
                    </MDBox>
                ),
                employed: (
                    <MDTypography
                        component="a"
                        href="#"
                        variant="caption"
                        color="text"
                        fontWeight="medium"
                    >
                        04/10/21
                    </MDTypography>
                ),
                action: (
                    <MDTypography
                        component="a"
                        href="#"
                        variant="caption"
                        color="text"
                        fontWeight="medium"
                    >
                        Edit
                    </MDTypography>
                ),
            },
            {
                author: (
                    <Author
                        image={team4}
                        name="Miriam Eric"
                        email="miriam@creative-tim.com"
                    />
                ),
                function: <Job title="Programator" description="Developer" />,
                status: (
                    <MDBox ml={-1}>
                        <MDBadge
                            badgeContent="offline"
                            color="dark"
                            variant="gradient"
                            size="sm"
                        />
                    </MDBox>
                ),
                employed: (
                    <MDTypography
                        component="a"
                        href="#"
                        variant="caption"
                        color="text"
                        fontWeight="medium"
                    >
                        14/09/20
                    </MDTypography>
                ),
                action: (
                    <MDTypography
                        component="a"
                        href="#"
                        variant="caption"
                        color="text"
                        fontWeight="medium"
                    >
                        Edit
                    </MDTypography>
                ),
            },
        ],
    };
}
