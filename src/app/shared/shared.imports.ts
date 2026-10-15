

/** Modulos para formularios */
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgOptimizedImage } from '@angular/common';





/** Elementos de angular material  */

import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import {MatIconModule} from '@angular/material/icon';
 
/** 
* SHARED IMPORT 
 * ---------------
 * 
 */

export const SHARED_IMPORTS = [
    /** Angular  */
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgOptimizedImage,
    /** Angular material  */
    MatButtonModule,
    MatDividerModule,
    MatIconModule    
];    
