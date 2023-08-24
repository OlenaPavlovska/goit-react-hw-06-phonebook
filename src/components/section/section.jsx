import PropTypes from 'prop-types';
import css from './section.module.css'


export const Section=({title, children})=> {
    return (<section className= {
            css.title
        }

        > <h2 className= {
            css.titleName
        }

        > {
            title
        }

        </h2> {
            children
        }

        </section>)
}

Section.propTypes= {
    title: PropTypes.string.isRequired
}