import {Component} from '@angular/core';


export class PinpointDirectives {
}

@Component ({
    selector: 'completed',
    template: `
       <div class="completed">Completed</div>
    `,
})

export class Completed {  
}

@Component ({
    selector: 'started',
    template: `
       <div class="started">Started</div>
    `
})

export class Started {  
}

@Component ({
    selector: 'deprecated',
    template: `
       <div class="deprecated">Deprecated</div>
    `
})

export class Deprecated {
    
}

@Component ({
    selector: 'completed-small',
    template: `
       <div class="completed-small">Completed</div>
    `,
})

export class CompletedSmall {  
}

@Component ({
    selector: 'started-small',
    template: `
       <div class="started-small">Started</div>
    `
})

export class StartedSmall {  
}

@Component ({
    selector: 'deprecated-small',
    template: `
       <div class="deprecated-small">Deprecated</div>
    `
})

export class DeprecatedSmall {
    
}

