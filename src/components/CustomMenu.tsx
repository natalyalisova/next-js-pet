import {Menu} from '@headlessui/react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCaretDown} from "@fortawesome/free-solid-svg-icons/faCaretDown";

type Props = {
    title: string;
    state: string;
    filters: Array<string>;
    setState: (value: string) => void;
}

const CustomMenu = ({title, state, filters, setState}: Props) => {
    return (
        <div className="flexStart flex-col w-full gap-7 relattive">
            <label htmlFor={title} className="w-full text-gray-100">
                {title}
            </label>
            <Menu as="div" className="self-start relative">
                <div>
                    <Menu.Button className="flexCenter custom_menu-btn">
                        {state || 'Select a category'}
                        <FontAwesomeIcon icon={faCaretDown}/>
                    </Menu.Button>
                </div>
                <Menu.Items className="flexStart custom_menu-items">
                    {filters.map((tag) => (
                        <Menu.Item key={tag}>
                            <button
                                type="button"
                                value={tag}
                                className="custom_menu-item"
                                onClick={(event) => setState(event.currentTarget.value)}
                            >
                                {tag}
                            </button>
                        </Menu.Item>
                    ))}
                </Menu.Items>
            </Menu>
        </div>
    )
}

export default CustomMenu;
