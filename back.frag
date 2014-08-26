#version 330

uniform sampler2DRect image0;
uniform sampler2DRect image1;

layout (location = 0) out vec4 fc;

void main()
{
  fc = abs(texture(image0, gl_FragCoord.xy) - texture(image1, gl_FragCoord.xy));
}
