#version 330

uniform sampler2DRect image0;
uniform sampler2DRect image1;

layout (location = 0) out vec4 fc;

void main()
{
  // âÊëfílÇÃç∑ÇãÅÇﬂÇÈ
  vec2 point = gl_FragCoord.xy;
  vec4 d[] = vec4[]
  (
    textureOffset(image0, point, ivec2(-2, -2)) - textureOffset(image1, point, ivec2(-2, -2)),
    textureOffset(image0, point, ivec2(-1, -2)) - textureOffset(image1, point, ivec2(-1, -2)),
    textureOffset(image0, point, ivec2( 0, -2)) - textureOffset(image1, point, ivec2( 0, -2)),
    textureOffset(image0, point, ivec2( 1, -2)) - textureOffset(image1, point, ivec2( 1, -2)),
    textureOffset(image0, point, ivec2( 2, -2)) - textureOffset(image1, point, ivec2( 2, -2)),

    textureOffset(image0, point, ivec2(-2, -1)) - textureOffset(image1, point, ivec2(-2, -1)),
    textureOffset(image0, point, ivec2(-1, -1)) - textureOffset(image1, point, ivec2(-1, -1)),
    textureOffset(image0, point, ivec2( 0, -1)) - textureOffset(image1, point, ivec2( 0, -1)),
    textureOffset(image0, point, ivec2( 1, -1)) - textureOffset(image1, point, ivec2( 1, -1)),
    textureOffset(image0, point, ivec2( 2, -1)) - textureOffset(image1, point, ivec2( 2, -1)),

    textureOffset(image0, point, ivec2(-2,  0)) - textureOffset(image1, point, ivec2(-2,  0)),
    textureOffset(image0, point, ivec2(-1,  0)) - textureOffset(image1, point, ivec2(-1,  0)),
    texture(image0, point) - texture(image1, point),
    textureOffset(image0, point, ivec2( 1,  0)) - textureOffset(image1, point, ivec2( 1,  0)),
    textureOffset(image0, point, ivec2( 2,  0)) - textureOffset(image1, point, ivec2( 2,  0)),

    textureOffset(image0, point, ivec2(-2,  1)) - textureOffset(image1, point, ivec2(-2,  1)),
    textureOffset(image0, point, ivec2(-1,  1)) - textureOffset(image1, point, ivec2(-1,  1)),
    textureOffset(image0, point, ivec2( 0,  1)) - textureOffset(image1, point, ivec2( 0,  1)),
    textureOffset(image0, point, ivec2( 1,  1)) - textureOffset(image1, point, ivec2( 1,  1)),
    textureOffset(image0, point, ivec2( 2,  1)) - textureOffset(image1, point, ivec2( 2,  1)),

    textureOffset(image0, point, ivec2(-2,  2)) - textureOffset(image1, point, ivec2(-2,  2)),
    textureOffset(image0, point, ivec2(-1,  2)) - textureOffset(image1, point, ivec2(-1,  2)),
    textureOffset(image0, point, ivec2( 0,  2)) - textureOffset(image1, point, ivec2( 0,  2)),
    textureOffset(image0, point, ivec2( 1,  2)) - textureOffset(image1, point, ivec2( 1,  2)),
    textureOffset(image0, point, ivec2( 2,  2)) - textureOffset(image1, point, ivec2( 2,  2))
  );

  // âÊëfílÇÃìÒèÊòaÇãÅÇﬂÇÈ
  vec4 dd = vec4(0.0);
  for (int i = 0; i < d.length(); ++i)
  {
    dd += d[i] * d[i];
  }

  // ãóó£ÇãÅÇﬂÇÈ
  fc = sqrt(dd / d.length());
}
