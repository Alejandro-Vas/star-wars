import { useMemo, useState } from 'react';
import styles from './styles.module.scss';

const options = ['All', 'Brown', 'Red', 'blue', 'white'];

function Filter() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string>(options[0]);

  const onToggle = () => setIsOpen(!isOpen);

  const onSelect = (value:string) => () => {
    setSelectedOption(value);
    setIsOpen(false);
  };

  const filteredOptions = useMemo(
    () => options.filter((option) => option !== selectedOption),
    [selectedOption],
  );

  return (
    <div className={styles.root}>
      <div>
        color eye
      </div>
      <div className={styles.dropDownContainer}>
        <div
          className={styles.dropDownHeader}
          onClick={onToggle}
          tabIndex={-1}
          role="button"
          onKeyDown={() => null}
        >
          {selectedOption || options[0]}
        </div>

        {isOpen && (
        <div className={styles.dropDownListContainer}>
          <div className={styles.dropDownList}>
            {filteredOptions.map((option) => (
              <div
                className={styles.listItem}
                onClick={onSelect(option)}
                key={option}
                tabIndex={-1}
                onKeyDown={() => null}
                role="button"
              >
                {option}
              </div>
            ))}
          </div>
        </div>
        )}
      </div>
    </div>
  );
}

export default Filter;
