figma.showUI(__html__);

figma.ui.resize(400,500);

figma.ui.onmessage = (pluginMessage) => {
  const nodes: SceneNode[] = [];

  // FRAME
  const frame = figma.createFrame();

  // GRIDS
  const line_1 = figma.createVector();
  const line_2 = figma.createVector();
  const line_3 = figma.createVector();
  const line_4 = figma.createVector();

  const circle = figma.createEllipse();

  const rectangle_1 = figma.createRectangle();
  const rectangle_2 = figma.createRectangle();
  const rectangle_3 = figma.createRectangle();

  if(pluginMessage.selected_pixel === "16") {

    frame.resize(16, 16);
    frame.name = "IconGrid - 16x16";

    line_1.vectorPaths = [{
      windingRule: "EVENODD",
      data: "M 16 16 L 0 0 L 0 0 Z",
    }]
  
    line_1.strokeWeight = 0.2;
    line_1.strokes = [{ type: 'SOLID', color: { r: 1, g: 0, b: 0 }, opacity: 0.25 }];

    line_2.vectorPaths = [{
      windingRule: "EVENODD",
      data: "M 16 0 L 0 16",
    }]
  
    line_2.strokeWeight = 0.2;
    line_2.strokes = [{ type: 'SOLID', color: { r: 1, g: 0, b: 0 }, opacity: 0.25 }];

    line_3.vectorPaths = [{
      windingRule: "NONE",
      data: "M 0 0 L 0 16",
    }]
  
    line_3.strokeWeight = 0.2;
    line_3.strokes = [{ type: 'SOLID', color: { r: 1, g: 0, b: 0 }, opacity: 0.25 }];
    line_3.x = 8;

    line_4.vectorPaths = [{
      windingRule: "NONE",
      data: "M 16 0 L 0 0",
    }]
  
    line_4.strokeWeight = 0.2;
    line_4.strokes = [{ type: 'SOLID', color: { r: 1, g: 0, b: 0 }, opacity: 0.25 }];
    line_4.y = 8;

    circle.resize(12,12);
    circle.x = 2;
    circle.y = 2;
    circle.fills = [{ type: 'SOLID', color: { r: 0, g: 0, b: 0}, opacity: 0 }];
    circle.strokeWeight = 0.2;
    circle.strokeAlign = 'INSIDE';
    circle.strokes = [{ type: 'SOLID', color: { r: 1, g: 0, b: 0}, opacity: 0.25 }];

    rectangle_1.resize(8,12);
    rectangle_1.x = 4;
    rectangle_1.y = 2;
    rectangle_1.cornerRadius = 1;
    rectangle_1.fills = [{ type: 'SOLID', color: { r: 0, g: 0, b: 0}, opacity: 0 }];
    rectangle_1.strokeWeight = 0.2;
    rectangle_1.strokeAlign = 'INSIDE';
    rectangle_1.strokes = [{ type: 'SOLID', color: { r: 1, g: 0, b: 0}, opacity: 0.25 }];

    rectangle_2.resize(12,8);
    rectangle_2.x = 2;
    rectangle_2.y = 4;
    rectangle_2.cornerRadius = 1;
    rectangle_2.fills = [{ type: 'SOLID', color: { r: 0, g: 0, b: 0}, opacity: 0 }];
    rectangle_2.strokeWeight = 0.2;
    rectangle_2.strokeAlign = 'INSIDE';
    rectangle_2.strokes = [{ type: 'SOLID', color: { r: 1, g: 0, b: 0}, opacity: 0.25 }];

    rectangle_3.resize(10,10);
    rectangle_3.x = 3;
    rectangle_3.y = 3;
    rectangle_3.cornerRadius = 1;
    rectangle_3.fills = [{ type: 'SOLID', color: { r: 0, g: 0, b: 0}, opacity: 0 }];
    rectangle_3.strokeWeight = 0.2;
    rectangle_3.strokeAlign = 'INSIDE';
    rectangle_3.strokes = [{ type: 'SOLID', color: { r: 1, g: 0, b: 0}, opacity: 0.25 }];

  } else if(pluginMessage.selected_pixel === "20") {

    frame.resize(20, 20);
    frame.name = "IconGrid - 20x20";

    line_1.vectorPaths = [{
      windingRule: "EVENODD",
      data: "M 20 20 L 0 0 L 0 0 Z",
    }]
  
    line_1.strokeWeight = 0.2;
    line_1.strokes = [{ type: 'SOLID', color: { r: 1, g: 0, b: 0 }, opacity: 0.25 }];

    line_2.vectorPaths = [{
      windingRule: "EVENODD",
      data: "M 20 0 L 0 20",
    }]
  
    line_2.strokeWeight = 0.2;
    line_2.strokes = [{ type: 'SOLID', color: { r: 1, g: 0, b: 0 }, opacity: 0.25 }];

    line_3.vectorPaths = [{
      windingRule: "NONE",
      data: "M 0 0 L 0 20",
    }]
  
    line_3.strokeWeight = 0.2;
    line_3.strokes = [{ type: 'SOLID', color: { r: 1, g: 0, b: 0 }, opacity: 0.25 }];
    line_3.x = 10;

    line_4.vectorPaths = [{
      windingRule: "NONE",
      data: "M 20 0 L 0 0",
    }]
  
    line_4.strokeWeight = 0.2;
    line_4.strokes = [{ type: 'SOLID', color: { r: 1, g: 0, b: 0 }, opacity: 0.25 }];
    line_4.y = 10;

    circle.resize(16,16);
    circle.x = 2;
    circle.y = 2;
    circle.fills = [{ type: 'SOLID', color: { r: 0, g: 0, b: 0}, opacity: 0 }];
    circle.strokeWeight = 0.2;
    circle.strokeAlign = 'INSIDE';
    circle.strokes = [{ type: 'SOLID', color: { r: 1, g: 0, b: 0}, opacity: 0.25 }];

    rectangle_1.resize(12,16);
    rectangle_1.x = 4;
    rectangle_1.y = 2;
    rectangle_1.cornerRadius = 1;
    rectangle_1.fills = [{ type: 'SOLID', color: { r: 0, g: 0, b: 0}, opacity: 0 }];
    rectangle_1.strokeWeight = 0.2;
    rectangle_1.strokeAlign = 'INSIDE';
    rectangle_1.strokes = [{ type: 'SOLID', color: { r: 1, g: 0, b: 0}, opacity: 0.25 }];

    rectangle_2.resize(16,12);
    rectangle_2.x = 2;
    rectangle_2.y = 4;
    rectangle_2.cornerRadius = 1;
    rectangle_2.fills = [{ type: 'SOLID', color: { r: 0, g: 0, b: 0}, opacity: 0 }];
    rectangle_2.strokeWeight = 0.2;
    rectangle_2.strokeAlign = 'INSIDE';
    rectangle_2.strokes = [{ type: 'SOLID', color: { r: 1, g: 0, b: 0}, opacity: 0.25 }];

    rectangle_3.resize(14,14);
    rectangle_3.x = 3;
    rectangle_3.y = 3;
    rectangle_3.cornerRadius = 1;
    rectangle_3.fills = [{ type: 'SOLID', color: { r: 0, g: 0, b: 0}, opacity: 0 }];
    rectangle_3.strokeWeight = 0.2;
    rectangle_3.strokeAlign = 'INSIDE';
    rectangle_3.strokes = [{ type: 'SOLID', color: { r: 1, g: 0, b: 0}, opacity: 0.25 }];

  } else if((pluginMessage.selected_pixel === "24")) {

    frame.resize(24, 24);
    frame.name = "IconGrid - 24x24";

    line_1.vectorPaths = [{
      windingRule: "EVENODD",
      data: "M 24 24 L 0 0 L 0 0 Z",
    }]
  
    line_1.strokeWeight = 0.2;
    line_1.strokes = [{ type: 'SOLID', color: { r: 1, g: 0, b: 0 }, opacity: 0.25 }];

    line_2.vectorPaths = [{
      windingRule: "EVENODD",
      data: "M 24 0 L 0 24",
    }]
  
    line_2.strokeWeight = 0.2;
    line_2.strokes = [{ type: 'SOLID', color: { r: 1, g: 0, b: 0 }, opacity: 0.25 }];

    line_3.vectorPaths = [{
      windingRule: "NONE",
      data: "M 0 0 L 0 24",
    }]
  
    line_3.strokeWeight = 0.2;
    line_3.strokes = [{ type: 'SOLID', color: { r: 1, g: 0, b: 0 }, opacity: 0.25 }];
    line_3.x = 12;

    line_4.vectorPaths = [{
      windingRule: "NONE",
      data: "M 24 0 L 0 0",
    }]
  
    line_4.strokeWeight = 0.2;
    line_4.strokes = [{ type: 'SOLID', color: { r: 1, g: 0, b: 0 }, opacity: 0.25 }];
    line_4.y = 12;

    circle.resize(20,20);
    circle.x = 2;
    circle.y = 2;
    circle.fills = [{ type: 'SOLID', color: { r: 0, g: 0, b: 0}, opacity: 0 }];
    circle.strokeWeight = 0.2;
    circle.strokeAlign = 'INSIDE';
    circle.strokes = [{ type: 'SOLID', color: { r: 1, g: 0, b: 0}, opacity: 0.25 }];

    rectangle_1.resize(16,20);
    rectangle_1.x = 4;
    rectangle_1.y = 2;
    rectangle_1.cornerRadius = 1;
    rectangle_1.fills = [{ type: 'SOLID', color: { r: 0, g: 0, b: 0}, opacity: 0 }];
    rectangle_1.strokeWeight = 0.2;
    rectangle_1.strokeAlign = 'INSIDE';
    rectangle_1.strokes = [{ type: 'SOLID', color: { r: 1, g: 0, b: 0}, opacity: 0.25 }];

    rectangle_2.resize(20,16);
    rectangle_2.x = 2;
    rectangle_2.y = 4;
    rectangle_2.cornerRadius = 1;
    rectangle_2.fills = [{ type: 'SOLID', color: { r: 0, g: 0, b: 0}, opacity: 0 }];
    rectangle_2.strokeWeight = 0.2;
    rectangle_2.strokeAlign = 'INSIDE';
    rectangle_2.strokes = [{ type: 'SOLID', color: { r: 1, g: 0, b: 0}, opacity: 0.25 }];

    rectangle_3.resize(18,18);
    rectangle_3.x = 3;
    rectangle_3.y = 3;
    rectangle_3.cornerRadius = 1;
    rectangle_3.fills = [{ type: 'SOLID', color: { r: 0, g: 0, b: 0}, opacity: 0 }];
    rectangle_3.strokeWeight = 0.2;
    rectangle_3.strokeAlign = 'INSIDE';
    rectangle_3.strokes = [{ type: 'SOLID', color: { r: 1, g: 0, b: 0}, opacity: 0.25 }];

  } else {

    frame.resize(32, 32);
    frame.name = "IconGrid - 32x32";

    line_1.vectorPaths = [{
      windingRule: "EVENODD",
      data: "M 32 32 L 0 0 L 0 0 Z",
    }]
  
    line_1.strokeWeight = 0.2;
    line_1.strokes = [{ type: 'SOLID', color: { r: 1, g: 0, b: 0 }, opacity: 0.25 }];

    line_2.vectorPaths = [{
      windingRule: "EVENODD",
      data: "M 32 0 L 0 32",
    }]
  
    line_2.strokeWeight = 0.2;
    line_2.strokes = [{ type: 'SOLID', color: { r: 1, g: 0, b: 0 }, opacity: 0.25 }];

    line_3.vectorPaths = [{
      windingRule: "NONE",
      data: "M 0 0 L 0 32",
    }]
  
    line_3.strokeWeight = 0.2;
    line_3.strokes = [{ type: 'SOLID', color: { r: 1, g: 0, b: 0 }, opacity: 0.25 }];
    line_3.x = 16;

    line_4.vectorPaths = [{
      windingRule: "NONE",
      data: "M 32 0 L 0 0",
    }]
  
    line_4.strokeWeight = 0.2;
    line_4.strokes = [{ type: 'SOLID', color: { r: 1, g: 0, b: 0 }, opacity: 0.25 }];
    line_4.y = 16;

    circle.resize(28,28);
    circle.x = 2;
    circle.y = 2;
    circle.fills = [{ type: 'SOLID', color: { r: 0, g: 0, b: 0}, opacity: 0 }];
    circle.strokeWeight = 0.2;
    circle.strokeAlign = 'INSIDE';
    circle.strokes = [{ type: 'SOLID', color: { r: 1, g: 0, b: 0}, opacity: 0.25 }];

    rectangle_1.resize(20,28);
    rectangle_1.x = 6;
    rectangle_1.y = 2;
    rectangle_1.cornerRadius = 2;
    rectangle_1.fills = [{ type: 'SOLID', color: { r: 0, g: 0, b: 0}, opacity: 0 }];
    rectangle_1.strokeWeight = 0.2;
    rectangle_1.strokeAlign = 'INSIDE';
    rectangle_1.strokes = [{ type: 'SOLID', color: { r: 1, g: 0, b: 0}, opacity: 0.25 }];

    rectangle_2.resize(28,20);
    rectangle_2.x = 2;
    rectangle_2.y = 6;
    rectangle_2.cornerRadius = 2;
    rectangle_2.fills = [{ type: 'SOLID', color: { r: 0, g: 0, b: 0}, opacity: 0 }];
    rectangle_2.strokeWeight = 0.2;
    rectangle_2.strokeAlign = 'INSIDE';
    rectangle_2.strokes = [{ type: 'SOLID', color: { r: 1, g: 0, b: 0}, opacity: 0.25 }];

    rectangle_3.resize(24,24);
    rectangle_3.x = 4;
    rectangle_3.y = 4;
    rectangle_3.cornerRadius = 2;
    rectangle_3.fills = [{ type: 'SOLID', color: { r: 0, g: 0, b: 0}, opacity: 0 }];
    rectangle_3.strokeWeight = 0.2;
    rectangle_3.strokeAlign = 'INSIDE';
    rectangle_3.strokes = [{ type: 'SOLID', color: { r: 1, g: 0, b: 0}, opacity: 0.25 }];
  }

  frame.layoutGrids = [{pattern: "GRID", sectionSize: 1}];

  // GROUPS
  frame.appendChild(line_1);
  frame.appendChild(line_2);
  frame.appendChild(line_3);
  frame.appendChild(line_4);
  frame.appendChild(circle);
  frame.appendChild(rectangle_1);
  frame.appendChild(rectangle_2);
  frame.appendChild(rectangle_3);

  figma.group([line_1,line_2,line_3,line_4,circle,rectangle_1,rectangle_2,rectangle_3], frame).locked = true;

  nodes.push(frame);
  figma.viewport.scrollAndZoomIntoView(nodes);

  figma.closePlugin();
}