import manifest from '@neos-project/neos-ui-extensibility';
import {$get} from 'plow-js';
import ConfigurationBuilder from "./helpers/ConfigurationBuilder";

manifest('TechDivision.CkStyles:Styles', {}, (globalRegistry, {frontendConfiguration}) => {

    new ConfigurationBuilder(frontendConfiguration, globalRegistry);

});
