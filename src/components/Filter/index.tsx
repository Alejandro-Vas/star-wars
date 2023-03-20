import { useMemo, useState } from 'react';
import { filters } from 'constants/index';
import useActions from 'hooks/useActions';
import { useTypedSelector } from 'hooks/useTypedSelector';
import useTranslation from 'hooks/useTranslation';
import styles from './styles.module.scss';

function Filter() {
  const { setActiveFilter } = useActions();
  const { language } = useTypedSelector((state) => state.translation);
  const { eyeColor: selectedOption } = useTypedSelector((state) => state.filter);

  const options = filters[language]?.eyeColors;

  const [isOpen, setIsOpen] = useState(false);

  const filteredOptions = useMemo(
    () => options.filter((option) => option !== selectedOption),
    [options, selectedOption],
  );

  const onToggle = () => setIsOpen((open) => !open);

  const onSelect = (value:string) => () => {
    setActiveFilter({ type: 'eyeColor', value });
    setIsOpen(false);
  };

  const [eyeColorText] = useTranslation(['eyeColor']);

  return (
    <div className={styles.root}>
      <div>
        {eyeColorText}
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
