import { useState } from 'react';
import { Card } from '../../shared/components';
import { region } from '../../shared/constants/region';
import styles from './RegionFilter.module.css';

interface IRegionFilter {
  selectedOption: string;
  handleSelectOption: (e: string) => void;
}

const RegionFilterForm = ({ selectedOption, handleSelectOption }: IRegionFilter) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSelect = () => setIsOpen(!isOpen);

  const onSelectOption = (key: string) => {
    handleSelectOption(key);
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.regionFilter}>
      <Card className={styles.card}>
        <div className={styles.select} onClick={toggleSelect}>
          <p>{selectedOption || 'Filter by Region'}</p>
          <span className="material-symbols-outlined">expand_more</span>
        </div>
      </Card>
      {isOpen && (
        <ul className={styles.options}>
          <Card className={styles.card}>
            {region.map(({ key }) => (
              <li key={key} onClick={() => onSelectOption(key)}>
                {key}
              </li>
            ))}
          </Card>
        </ul>
      )}
    </div>
  );
};

export default RegionFilterForm;
