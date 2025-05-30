import { FC } from 'react';
import RefundPolicy from './RefundPolicy';
import { refundPolicyData } from './RefundPolicy.constants';

const RefundPolicyContainer: FC = () => {
  return <RefundPolicy data={refundPolicyData} />;
};

export default RefundPolicyContainer;
