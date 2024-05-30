import * as React from 'react';
import { forwardRef, useState } from 'react';

import { useCombinedRefs } from './utils';
import Confirm from './confirm.svg';
import DownLoad from './download.svg';
import Close from './close.svg';

interface IProps {
  type: string;
  info: { size: number; color: string };
  setInfo: any;
  onChange: (type: string, options?: { color?: string; size?: number }) => void;
  onClose: () => void;
  onCancel: () => void;
  onDownload: () => void;
  onCopy: () => void;
}

const Tools = forwardRef<HTMLDivElement, IProps>(
  ({ type, info, setInfo, onChange, onClose, onCancel, onDownload, onCopy }, ref) => {
    const [selected, setSelected] = useState('');
    const [position, setPosition] = useState<any>('bottom');
    const toolsRef = React.useRef(null);
    const combinedRef = useCombinedRefs(ref, toolsRef) as any;
    const handleClick = (curType: string) => {
      const pos = (combinedRef.current as HTMLDivElement).getBoundingClientRect();
      if (pos.bottom >= window.innerHeight - pos.height - 5) {
        setPosition('top');
      } else {
        setPosition('bottom');
      }
      onChange(curType);
      setSelected(curType);
    };
    const handleClose = () => {
      onClose();
      setSelected('');
    };

    return (
      <div className="tools" ref={combinedRef}>
        <DownLoad onClick={onDownload} />
        <Close onClick={handleClose} />
        <Confirm className="tools-item" onClick={onCopy} />
      </div>
    );
  }
);

export default Tools;
