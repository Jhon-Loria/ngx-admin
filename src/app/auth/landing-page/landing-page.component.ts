import { Component } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  template: `
    <div style="display: flex; justify-content: center; align-items: center; min-height: 100vh; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 20px;">
      <div style="background: white; border-radius: 8px; padding: 40px; max-width: 800px; width: 100%; box-shadow: 0 10px 40px rgba(0,0,0,0.2);">
        <div style="text-align: center; margin-bottom: 30px;">
          <h1 style="color: #2c3e50; margin-bottom: 10px; font-size: 2.5rem;">Encuentra tu entrenador personal ideal</h1>
          <p style="color: #7b8a8b; font-size: 1.2rem;">Agenda sesiones de entrenamiento como pides un Uber</p>
        </div>
        
        <div style="display: flex; gap: 15px; justify-content: center; margin-bottom: 40px;">
          <a routerLink="/auth/login" style="padding: 12px 30px; background: #00d68f; color: white; border: none; border-radius: 4px; font-size: 1rem; font-weight: 600; cursor: pointer; text-decoration: none; display: inline-block;">
            Buscar Entrenador
          </a>
          <a routerLink="/auth/register" style="padding: 12px 30px; background: #e4e9f2; color: #2c3e50; border: none; border-radius: 4px; font-size: 1rem; font-weight: 600; cursor: pointer; text-decoration: none; display: inline-block;">
            Soy Entrenador
          </a>
        </div>

        <section style="margin-top: 40px; padding-top: 40px; border-top: 1px solid #e4e9f2;">
          <h3 style="text-align: center; color: #2c3e50; margin-bottom: 30px; font-size: 1.8rem;">Cómo funciona</h3>
          <div style="display: flex; gap: 20px; justify-content: center; flex-wrap: wrap;">
            <div style="background: #f7f9fc; border: 1px solid #e4e9f2; border-radius: 8px; padding: 30px; text-align: center; flex: 1; min-width: 150px; max-width: 200px;">
              <div style="font-size: 3rem; margin-bottom: 10px;">🔍</div>
              <h4 style="color: #2c3e50; margin-bottom: 10px;">Busca</h4>
              <p style="color: #7b8a8b; font-size: 0.9rem;">Encuentra el entrenador perfecto para ti</p>
            </div>
            <div style="background: #f7f9fc; border: 1px solid #e4e9f2; border-radius: 8px; padding: 30px; text-align: center; flex: 1; min-width: 150px; max-width: 200px;">
              <div style="font-size: 3rem; margin-bottom: 10px;">📅</div>
              <h4 style="color: #2c3e50; margin-bottom: 10px;">Agenda</h4>
              <p style="color: #7b8a8b; font-size: 0.9rem;">Reserva tu sesión en el horario que prefieras</p>
            </div>
            <div style="background: #f7f9fc; border: 1px solid #e4e9f2; border-radius: 8px; padding: 30px; text-align: center; flex: 1; min-width: 150px; max-width: 200px;">
              <div style="font-size: 3rem; margin-bottom: 10px;">💪</div>
              <h4 style="color: #2c3e50; margin-bottom: 10px;">Entrena</h4>
              <p style="color: #7b8a8b; font-size: 0.9rem;">Alcanza tus objetivos con tu entrenador</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  `,
})
export class LandingPageComponent {}
