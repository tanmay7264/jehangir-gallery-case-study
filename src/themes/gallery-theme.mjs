import {defineTheme} from '@astryxdesign/core/theme';
import {neutralTheme} from '@astryxdesign/theme-neutral/built';
export const galleryTheme=defineTheme({name:'field-journal',extends:neutralTheme,typography:{body:{family:'DM Sans',fallbacks:'system-ui, sans-serif'},heading:{family:'DM Sans',fallbacks:'system-ui, sans-serif'}},tokens:{
 '--color-accent':'#0B3048','--color-accent-text':'#ffffff','--color-background-body':'#f2f0e9','--color-background-surface':'#ffffff',
 '--color-text-primary':'#0B3048','--color-text-secondary':'#526470','--radius-container':'1rem',
 '--journal-ink':'#0B3048','--journal-muted':'#526470','--journal-paper':'#f2f0e9','--journal-white':'#ffffff','--journal-line':'#d6dcd9','--journal-rust':'#0B3048','--journal-olive':'#e8ece5','--journal-dark':'#0B3048','--journal-light':'#f2f0e9','--journal-warm':'#f2f0e9',
 '--journal-display':'"DM Serif Display", Georgia, serif','--journal-lime':'#b9f12f','--journal-sketch':'#526470','--journal-warm-line':'#dcdcd2','--journal-serif':'"Instrument Serif", Georgia, serif','--journal-sans':'"DM Sans", system-ui, sans-serif',
 '--journal-wide':'86rem','--journal-narrow':'46rem','--journal-gutter':'clamp(1.25rem, 4vw, 4rem)','--journal-section':'clamp(3.5rem, 6vw, 6rem)'
},components:{heading:{base:{fontFamily:'var(--journal-sans)',letterSpacing:'-0.035em',fontWeight:'500'}},text:{base:{fontFamily:'var(--journal-sans)',lineHeight:'1.7'}},button:{base:{borderRadius:'999rem'}},card:{base:{borderRadius:'1rem',borderColor:'var(--journal-line)'}}}});
