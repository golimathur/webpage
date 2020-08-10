import React from 'react';
import {
    Nav,
    initializeIcons
} from '@fluentui/react';



const links = [{
    links: [{
            name: 'Dashboard',
            url: '/',
            key: 'key1',

            iconProps: {
                iconName: 'viewDashboard',
                styles: {
                    root: {
                        fontsize: 20,
                        color: '#106ebc'
                    }
                }
            }
        },

        {
            name: 'Tasks',
            url: '/Tasks',
            key: 'key2',
            iconProps: {
                iconName: 'TaskManager',
                styles: {
                    root: {
                        fontsize: 20,
                        color: '#106ebc'

                    }
                }
            }
        },

        {
            name: 'Deadlines',
            url: '/Deadlines',
            key: 'key3',
            iconProps: {
                iconName: 'Calendar',
                styles: {
                    root: {
                        fontsize: 20,
                        color: '#106ebc'

                    }
                }
            }
        },

        {
            name: 'Quotes',
            url: '/Quotes',
            key: 'key4',
            iconProps: {
                iconName: 'TaskManagerMirrored',
                styles: {
                    root: {
                        fontsize: 20,
                        color: '#106ebc'

                    }
                }
            }
        },


        {
            name: 'Clients',
            url: '/Clients',
            key: 'key5',
            iconProps: {
                iconName: 'UserGauge',
                styles: {
                    root: {
                        fontsize: 20,
                        color: '#106ebc'

                    }
                }
            }
        },

        {
            name: 'Engagement Letter',
            url: '/Engagement Letter',
            key: 'key6',
            iconProps: {
                iconName: 'News',
                styles: {
                    root: {
                        fontsize: 20,
                        color: '#106ebc'

                    }
                }
            }
        },

        {
            name: 'Reports',
            url: '/Reports',
            key: 'key7',
            iconProps: {
                iconName: 'CRMReport',
                styles: {
                    root: {
                        fontsize: 20,
                        color: '#106ebc'

                    }
                }
            }
        },

    ]
}]

const navigationStyles = {
    root: {
        height: '100vh',
        marginTop: '0px',
        width: "200px",
        overflowY: 'auto',
        marginLeft: '-8px'



    }
}

const Navigation = () => {
    initializeIcons();
    return (


        <
        Nav groups = {
            links
        }
        selectedKey = "key1"
        styles = {
            navigationStyles
        }


        />


    )
}



export default Navigation;