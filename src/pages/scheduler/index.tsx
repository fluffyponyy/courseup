import { Flex } from '@chakra-ui/layout';
import { useParams } from 'react-router';

import { Page } from 'common/page';

import { SchedulerSidebar } from './components/SchedulerSidebar';
import { SchedulerContainer } from './containers/SchedulerContainer';

export function Scheduler(): JSX.Element {
  const { term } = useParams();

  return (
    <Page title="Scheduler" hasSidebar>
      <Flex flexGrow={1}>
        <SchedulerContainer />
        <SchedulerSidebar term={term} />
      </Flex>
    </Page>
  );
}
