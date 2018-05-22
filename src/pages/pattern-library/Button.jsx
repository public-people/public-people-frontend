import React from 'react';
import Button from './../../components/Button/index';


export default function PatternsPage() {
  return (
    <div>
      <div className="mt-20">
        <Button>Standard Button</Button>
      </div>
      <div className="mt-20">
        <Button primary>Primary Button</Button>
      </div>
    </div>
  );
}
