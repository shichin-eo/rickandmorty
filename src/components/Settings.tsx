import React from 'react';
import Button from './Button';
import Filter from './Filter';
import Flex from './Flex';

interface SettingsI {
    onClick?: () => void;
    theme? : string;
    filters : string[];
    filtersHandler: (filter: string, action: string) => void;
}

const Settings: React.FC<SettingsI> = (props) => {
    return (
        <Flex justify="flex-end" width="100%" height="4vh">
            <Filter filters={props.filters} filtersHandler={props.filtersHandler}/>
            <Button icon={props.theme}  width="3vh" height="3vh%" onClick={props.onClick}></Button>
        </Flex>
    );
};

export default Settings;