// THIS TYPE WAS AUTOGENERATED
/// <reference path="Domain.ts" />
/// <reference path="SessionState.ts" />
module AI
{
"use strict";
    export class SessionStateData extends Microsoft.Telemetry.Domain
    {
        public ver: number;
        public state: AI.SessionState;
        
        constructor()
        {
            super();

            this.ver = 2;
            this.state = AI.SessionState.Start;
            
            super();
        }
    }
}
